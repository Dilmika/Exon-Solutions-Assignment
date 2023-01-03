import React from 'react'
import { useState, useEffect } from "react"

export default function CustomerReceipt({ data }) {

    const [receiptAmount, setReceiptAmnt] = useState(0)
    const [receiptNo, setReceiptNo] = useState('')
    const [totAmount, setTotAmount] = useState(0)
    const [selectedInvoices, setSelectedInvoices] = useState([])
    const [totalSumOfInvoice, setTotalSumOfInvoice] = useState(0)

    useEffect(() => {

        if(selectedInvoices.length > 0){

            let total = 0 
    
            selectedInvoices.map((item) => 
                total = total + item.amount
            )
    
            setTotalSumOfInvoice(total)
        
        }
    
    }, [selectedInvoices])
    

    const handleChange = (e) => {
        e.preventDefault()
        
        const selected_invoice = data.invoices.find(item => item.invoice_no === e.target.value)
        
        let total = selectedInvoices
        
        total = Array.from(
            new Set([...total, selected_invoice])
            )
            
            setSelectedInvoices(total)
    }

    const removeInoice = (no) => {

        let array = selectedInvoices.filter((item) => 
        item.invoice_no !== no
        )
        
        setSelectedInvoices(array)

    }

    const generateReceipt = (e) => {
        e.preventDefault()

        if(totalSumOfInvoice < receiptAmount){
            alert('Total Amount from invoices is lest than the receipt amount')
        }else{
        //     <PDFViewer>
        //     <PdfDcument/>
        //   </PDFViewer>
        }


    }

    return (
        <form className="create" >
            <label>Receipt No</label>
            <input
                value={receiptNo}
                onChange={(e) => setReceiptNo(e.target.value)}
                type="text"
            />

            <label>Enter the Amount</label>
            <input
                type="number"
                value={receiptAmount}
                onChange={(e) => setReceiptAmnt(e.target.value)}
            />

            <div className='home'>
                <div>
                    <label>Select Invoices</label>

                    <select onChange={handleChange}>
                        {
                            data.invoices.map((item) => (
                                <option value={item.invoice_no}>{item.invoice_no}</option>
                            ))
                        }

                    </select>
                </div>

                <div className='invoiceMap'>
                    {
                        selectedInvoices.map((item) => (
                            <div className='home'>
                                <div>{item.invoice_no}</div>
                                <div onClick={() => removeInoice(item.invoice_no)} className="remove-item-array"><span class="material-symbols-outlined">close</span></div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <label>Total Amount from invoices</label>
            <input
                disabled={true}
                type="number"
                value={selectedInvoices.length != 0 ? totalSumOfInvoice : 0}                
            />

            <button onClick={generateReceipt}>Generate Receipt</button>

        </form>
    )
}
