import React from 'react'
import {WelcomeWrapper, WelcomeSection, WelcomeButton, WelcomeImg, WelcomeTitle, WelcomeText} from './WelcomeElements';
import WelcomePicture from '../../images/WelcomeImg.png';

const Welcome = () => {
    return (
        <WelcomeWrapper>
            <WelcomeTitle>Bienvenidos</WelcomeTitle>
            <WelcomeSection>
                <WelcomeImg src={WelcomePicture} alt="Welcome Image"/>
                <WelcomeText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus ligula lectus, et sagittis ligula ultricies et
                    <WelcomeButton>
                        Ordenar
                    </WelcomeButton>
                </WelcomeText>
            </WelcomeSection>
        </WelcomeWrapper>
    )
}

export default Welcome
