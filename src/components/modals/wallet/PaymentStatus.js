import React from 'react';
import Modal from '../../common/Modal';
import Typography from '../../common/typography';
import paymentFailIcon from "../../../assets/svg/payment-fail.svg";
import paymentDoneIcon from "../../../assets/svg/payment-done.svg";

const PaymentStatus = ({ isError, amount, balance, details, onRetry }) => {
    const icon = isError ? paymentFailIcon : paymentDoneIcon;
    const title = isError ? "Payment failed" : "Payment deposited successfully";
    const message = isError
        ? `Payment of $${amount} failed due to technical reasons`
        : `An amount $${amount} added to your wallet successfully`;
    const buttonText = isError ? "Retry Payment" : null;

    return (
        <Modal>
            <div className="flex items-center justify-center bg-blackRussian">
                <div className="w-full">
                    {/* Icon and Title Section */}
                    <div className="flex bg-richBlack rounded-2xl pt-10 flex-col items-center justify-center h-[340px]">
                        <img src={icon} alt={title} />
                        <div className="flex flex-col text-center justify-center items-center mt-4">
                            <Typography variant="size20Semibold" color="white" content={title} />
                            <div className="mt-1.5 text-center">
                                <Typography variant="size14Medium" color="white" content={message} />
                            </div>
                            {!isError && (
                                <div className="mt-6">
                                    <Typography
                                        variant="size14Semibold"
                                        color="white"
                                        content={`Total available balance: $${balance}`}
                                    />
                                </div>
                            )}
                            {isError && (
                                <>
                                <div className="mt-3">
                                    <button
                                        onClick={onRetry}
                                        className="bg-primary w-[186px] whitespace-nowrap rounded-lg py-4 px-9 text-base leading-4 font-semibold"
                                    >
                                        {buttonText}
                                    </button>
                                </div>
                                <div className='text-center mt-5'>
                                <Typography variant={"size12Normal"} color={"white"} content={"Please note: If the transaction fails but the money is deducted, your account should be automatically credited within 3–5 working days."}/>
                            </div>
                            </>
                            )}
                        </div>
                    </div>

                    {/* Payment Details Section */}
                    <div className="bg-blackRussian mt-11">
                        <Typography variant="size12Normal" color="vintageRibbon" content="PAYMENT DETAILS" />
                        {details.map(({ label, value }, index) => (
                            <div className="flex justify-between mt-3" key={index}>
                                <Typography variant="size14Semibold" color="white" content={label} />
                                <Typography variant="size14Medium" color="white" content={value} />
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer Section */}
                    <div className="bg-darkByzantineBlue rounded-lg py-3.5 text-center mt-11">
                        <Typography
                            variant="size12Normal"
                            color="vintageRibbon"
                            content="Disclaimer: text goes here"
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PaymentStatus;
