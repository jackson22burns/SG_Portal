import React, {} from "react"


const VerifyModal = () => {
    return(
        <div className="docs">
            <br/>
            <div class="containerDoc">
                <div class= "boxDoc">
                    <h6>Details</h6>
                </div>
                <div class= "boxDoc">
                    <h6>Date</h6>
                </div>
                <div class= "boxDoc">
                    <h6>Status</h6>
                </div>
            </div>
            <hr size="4" width="100%" color="black"/>
            
            <div class="containerDoc">
                <div class= "boxDoc">
                    <div onClick={ () => window.open(require('../uploads/4506-T.pdf'), '_none')}>
                        <p className = "link">Voided Check</p>
                    </div>
                </div>
                <div class= "boxDoc">
                    <h6>07/01/21 8:39 PM</h6>
                </div>
                <div class= "boxDoc">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Check_green_circle.svg/1024px-Check_green_circle.svg.png" 
                        height="20" width="20" alt="pending"></img>
                </div>
            </div>
            <hr size="4" width="100%" color="black"/>
            <div class="containerDoc">
                <div class= "boxDoc">
                    <div onClick={ () => window.open('https://www.irs.gov/pub/irs-pdf/f4506t.pdf', '_none')}>
                        <p className = "link">4506-T.pdf</p>
                    </div>
                </div>
                <div class= "boxDoc">
                    <h6>07/01/21 8:43 PM</h6>
                </div>
                <div class= "boxDoc">
                    <img src="https://image.flaticon.com/icons/svg/833/833602.svg" height="20" width="20" alt="pending"></img>
                </div>
            </div>
            <hr size="4" width="100%" color="black"/>
            <div class="containerDoc">
                <div class= "boxDoc">
                    <div onClick={ () => window.open(require('../uploads/4506-T.pdf'), '_none')}>
                        <p className = "link">Voided Check</p>
                    </div>
                </div>
                <div class= "boxDoc">
                    <h6>07/01/21 8:46 PM</h6>
                </div>
                <div class= "boxDoc">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Check_green_circle.svg/1024px-Check_green_circle.svg.png"
                        height="20" width="20" alt="pending"></img>
                </div>
            </div>
            <hr size="4" width="100%" color="black"/>
            <div class="containerDoc">
                <div class= "boxDoc">
                    <div onClick={ () => window.open(require('../uploads/4506-T.pdf'), '_none')}>
                        <p className = "link">Board Resolution</p>
                    </div>
                </div>
                <div class= "boxDoc">
                    <h6>07/01/21 8:51 PM</h6>
                </div>
                <div class= "boxDoc">
                    <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/alert-triangle-red-512.png"
                        height="20" width="20" alt="pending"></img>
                </div>
            </div>
            <hr size="4" width="100%" color="black"/>
        </div>
    )
}

export default VerifyModal;