import React from 'react'
import Modal from '../components/common/Modal'
import paymentFailIcon from "../assets/svg/payment-fail.svg"
import Typography from '../components/common/typography'

const PaymentFail = () => {
    return (
        <Modal>
            <div class="flex items-center justify-center bg-blackRussian">
                <div class="w-full">
                    <div class="flex bg-richBlack h-[290px] rounded-2xl pt-10 flex-col items-center justify-center">
                        <img src={paymentFailIcon} alt='Payment Successful' />
                        <div className='flex flex-col justify-center items-center mt-4'>
                            <Typography variant={"size20Semibold"} color={"white"} content={"Payment failed"}/>
                            <div className='mt-1.5'>
                            <Typography variant={"text14Medium"} color={"white"} content={"Payment of $500 failed due to technical reasons"} />
                            </div>
                            <div className='mt-6'>
                            <Typography variant={"text14Semibold"} color={"white"} content={"Total available balance: $580"}/>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blackRussian mt-11">
                        <Typography variant={"text12Normal"} color={"vintageRibbon"} content={"PAYMENT DETAILS"}/>
                        <div class="flex justify-between mt-4">
                            <Typography variant={"text14Semibold"} color={"white"} content={"Reference no."}/>
                            <Typography variant={"text14Medium"} color={"white"} content={"#35576786566"}/>
                        </div>
                        <div class="flex justify-between mt-3">
                        <Typography variant={"text14Semibold"} color={"white"} content={"Payment date and time"}/>
                            <Typography variant={"text14Medium"} color={"white"} content={"25 Oct 2024, 06:20 PM"}/>
                        </div>
                        <div class="flex justify-between mt-3">
                        <Typography variant={"text14Semibold"} color={"white"} content={"Deposit Amount"}/>
                        <Typography variant={"text14Medium"} color={"white"} content={"$500"}/>
                        </div>
                        <div class="flex justify-between mt-3">
                        <Typography variant={"text14Semibold"} color={"white"} content={"Status"}/>
                        <Typography variant={"text14Medium"} color={"white"} content={"Completed"}/>
                        </div>
                    </div>
                    <div class="bg-darkByzantineBlue rounded-lg py-3.5  text-center mt-11">
                        <Typography variant={"text12Normal"} color={"vintageRibbon"} content={"Disclaimer: text goes here"}/>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default PaymentFail