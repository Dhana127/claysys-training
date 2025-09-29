const listenner = document.getElementById("button-id").addEventListener("click", output);
function output() {
    const amountid = parseFloat(document.getElementById("amount-id").value);
    const interestid = parseFloat(document.getElementById("interest-id").value);
    const yearsid = parseFloat(document.getElementById("years-id").value);
    const out_in = document.getElementById("output-interest");
    const out_amount = document.getElementById("output-totalamount");
    const out_info = document.getElementById("output-info");
    out_in.innerHTML = "";
    out_amount.innerHTML = "";
    out_info.innerHTML = "";
    if (isNaN(amountid) || isNaN(yearsid)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }
    let interest;
    let interestpercent;
    if (amountid >= 500 && amountid <= 10000) {
        switch (true) {
            case amountid <= 1000 && yearsid <= 5:
                interestpercent = 5;
                interest = (amountid * interestpercent * yearsid) / 100;
                out_in.innerHTML = interest;
                out_amount.innerHTML = interest + amountid;
                out_info.innerHTML = "if your time is above 5 years then you will get 2% additonal interest";
                console.log(amountid);
                break;

            case amountid > 1000 && amountid <= 5000 && yearsid <= 5:
                interestpercent = 7;
                interest = (amountid * interestpercent * yearsid) / 100;
                out_in.innerHTML = interest;
                out_amount.innerHTML = interest + amountid;
                out_info.innerHTML = "if your time is above 5 years then you will get 2% additonal interest";
                console.log(amountid);
                break;

            case amountid > 5000 && amountid <= 10000 && yearsid <= 5:
                interestpercent = 10;
                interest = (amountid * interestpercent * yearsid) / 100;
                out_in.innerHTML = interest;
                out_amount.innerHTML = interest + amountid;
                out_info.innerHTML = "if your time is above 5 years then you will get 2% additonal interest";
                console.log(amountid);
                break;

            case amountid <= 1000 && yearsid > 5:
                interestpercent = 5 + 2;
                interest = (amountid * interestpercent * yearsid) / 100;
                out_in.innerHTML = interest;
                out_amount.innerHTML = interest + amountid;
                out_info.innerHTML = "2% additonal interest is applied ";
                console.log(amountid);
                break;

            case amountid > 1000 && amountid <= 5000 && yearsid > 5:
                interestpercent = 7 + 2;
                interest = (amountid * interestpercent * yearsid) / 100;
                out_in.innerHTML = interest;
                out_amount.innerHTML = interest + amountid;
                out_info.innerHTML = "2% additonal interest is applied";
                console.log(amountid);
                break;

            case amountid > 5000 && amountid <= 10000 && yearsid > 5:
                interestpercent = 10 + 2;
                interest = (amountid * interestpercent * yearsid) / 100;
                out_in.innerHTML = interest;
                out_amount.innerHTML = interest + amountid;
                out_info.innerHTML = "2% additonal interest is applied ";
                console.log(amountid);
                break;

            default:
                break;
        }

    } else {
        alert("Amount should be above 500 and upto 10000 only")
    }
    if (interestid != null && interestid != undefined) {
        if (isNaN(interestid)) {

        } else {
            let interest;
            let interestpercent;
            if (amountid >= 500 && amountid <= 10000) {
                switch (true) {
                    case amountid <= 1000 && yearsid <= 5:
                        interestpercent = interestid;
                        interest = (amountid * interestpercent * yearsid) / 100;
                        out_in.innerHTML = interest;
                        out_amount.innerHTML = interest + amountid;
                        out_info.innerHTML = "if your time is above 5 years then you will get 2% additonal interest output for custom interest";
                        console.log(amountid);
                        break;

                    case amountid > 1000 && amountid <= 5000 && yearsid <= 5:
                        interestpercent = interestid;
                        interest = (amountid * interestpercent * yearsid) / 100;
                        out_in.innerHTML = interest;
                        out_amount.innerHTML = interest + amountid;
                        out_info.innerHTML = "if your time is above 5 years then you will get 2% additonal interest output for custom interest";
                        console.log(amountid);
                        break;

                    case amountid > 5000 && amountid <= 10000 && yearsid <= 5:
                        interestpercent = interestid;
                        interest = (amountid * interestpercent * yearsid) / 100;
                        out_in.innerHTML = interest;
                        out_amount.innerHTML = interest + amountid;
                        out_info.innerHTML = "if your time is above 5 years then you will get 2% additonal interest output for custom interest";
                        console.log(amountid);
                        break;

                    case amountid <= 1000 && yearsid > 5:
                        interestpercent = interestid + 2;
                        interest = (amountid * interestpercent * yearsid) / 100;
                        out_in.innerHTML = interest;
                        out_amount.innerHTML = interest + amountid;
                        out_info.innerHTML = "2% additonal interest is applied output for custom interest ";
                        console.log(amountid);
                        break;

                    case amountid > 1000 && amountid <= 5000 && yearsid > 5:
                        interestpercent = interestid + 2;
                        interest = (amountid * interestpercent * yearsid) / 100;
                        out_in.innerHTML = interest;
                        out_amount.innerHTML = interest + amountid;
                        out_info.innerHTML = "2% additonal interest is applied output for custom interest";
                        console.log(amountid);
                        break;

                    case amountid > 5000 && amountid <= 10000 && yearsid > 5:
                        interestpercent = interestid + 2;
                        interest = (amountid * interestpercent * yearsid) / 100;
                        out_in.innerHTML = interest;
                        out_amount.innerHTML = interest + amountid;
                        out_info.innerHTML = "2% additonal interest is applied output for custom interest";
                        console.log(amountid);
                        break;

                    default:
                        break;
                }
            }
        }
    }
}