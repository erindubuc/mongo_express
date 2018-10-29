const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    name: { /*name of stock*/
        type: String,
        required: true,
    },
    symbol: { /*symbol to search for*/
        type: String,
        required: true,
    },
    shares: { /*number of stock shares*/
        type: Number,
        required: true,
    },
    group: { /*NASDAQ, NYSE*/
        type: String,
        required: true,
    },
    priceShare: { /*price per share*/
        type: Number,
        required: true,
    },
    currentValue: {
        type: Number,
        required: true,
    },
    highMarketDay: {
        type: Number,
        required: true,
    },
    lowMarketDay: {
        type: Number,
        required: true,
    },
    issueType: { /*common issue type of the stock. 
        ad – American Depository Receipt (ADR’s) 
        re – Real Estate Investment Trust (REIT’s)
        ce – Closed end fund (Stock and Bond Fund) 
        si – Secondary Issue 
        lp – Limited Partnerships
        cs – Common Stock 
        et – Exchange Traded Fund (ETF) 
        (blank) = Not Available, i.e., Warrant, Note, or (non-filing) Closed Ended Funds*/
        type: String,
        required: true,
    },
    sector: { /*type of sector*/
        type: String,
        required: true,
    },
    tags: { /*array of strings used to classify the company (tech,consumer electronics, computer hardware */
        type: Array,
        required: true,
    },
    dividendType: { /*dividend payment type (Dividend income, Interest income, Stock dividend, Short term capital gain, Medium term capital gain, Long term capital gain, Unspecified term capital gain)*/
        type: String,
        required: true,
    },
    dividendQualified: { /*dividend income type 
        P = Partially qualified income 
        Q = Qualified income 
        N = Unqualified income
        null = N/A or unknown*/
        type: String,
        required: true,
    },
    timesSearched: { /*number of times stock was searched for*/
        type: Number,
        
    },
    bought6M: { /*number of shares bought in last 6 months*/
        type: Number,    
    },
    bought1Y: { /*number of shares bought within the last year*/
        type: Number,    
    }, 
    sold6M: { /*number of shares sold in last 6 months*/
        type: Number,    
    },
    sold1Y: { /*number of shares sold within the last year*/
        type: Number,    
    } 
})

module.exports = Stock = mongoose.model("stocks", StockSchema);