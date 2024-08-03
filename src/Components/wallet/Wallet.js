import React from 'react'
import './Wallet.css'

const Wallet = () => {
    return (
        <div>
            <div className="heading1Wallet">Balance and Rewards</div>
            <div className='pointsandrupees'>
                <div className='iconsWallet'>
                    <div className='quantity'>5000</div>
                    <div className='value'>Points</div>
                </div>
                <div className='iconsWallet'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='#ff21bc' viewBox="0 0 512 512"><path d="M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" /></svg>
                </div>
                <div className='iconsWallet'>
                    <div className='quantity'>₹50</div>
                    <div className='value'>Balance (in Rupees)</div>
                </div>
            </div>
            <div className='infoWallet'>
                <div className='topic_head feedbackTopic'>UniCollab <span className='Pro'>Pro</span></div>
                <div className='descWallet1'>
                    <div className='quantity'>Now, UniCollab Pro members will earn 50 ppoints</div>
                    <div className='value'>On every ₹100 spent on UniCollab</div>
                </div>
            </div>
            <div className="heading2Wallet">Points History</div>
            <div className='detailsPayment'>
                <div className='detailsCardWallet'>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, cumque eum. </div>
                    <div>Credited On XX-XX-XXXX</div>
                </div>
                <div className='amountWallet'>+ 100 points</div>
            </div>
            <div className='detailsPayment'>
                <div className='detailsCardWallet'>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, cumque eum. </div>
                    <div>Credited On XX-XX-XXXX</div>
                </div>
                <div className='amountWallet'>+ 100 points</div>
            </div>
            <div className='detailsPayment'>
                <div className='detailsCardWallet'>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, cumque eum. </div>
                    <div>Credited On XX-XX-XXXX</div>
                </div>
                <div className='amountWallet'>+ 100 points</div>
            </div>
        </div>
    )
}

export default Wallet
