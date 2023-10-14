import {TypeormDatabase} from '@subsquid/typeorm-store';
import {processor} from './processor';
import {Transaction} from './model';
import * as erc20 from "./abi/erc20";

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    let transactions: Transaction[] = []
    
    for (let blc of ctx.blocks) {
        for (let tx of blc.transactions) {
            let { _to, _value} = erc20.functions.transfer.decode(tx.input);
            // decode and normalize the tx data
            transactions.push(
                new Transaction({
                    id: tx.id,
                    amount: _value,
                    from: tx.from || "0x",
                    recipient: _to,
                    token: tx.to,
                })
            );
        }
    }
    await ctx.store.insert(transactions)
})
