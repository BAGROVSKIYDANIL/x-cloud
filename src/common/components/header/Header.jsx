import {useState, useEffect} from 'react';
import './header.scss'

const Header = () =>
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [index, setIndex] = useState(0);
    const [printedText, setPrintedText] = useState('')
    let activeText = ['CRM', 'VOIP', 'API'];

    useEffect(() =>
    {
     const timer = setInterval(() =>
     {   
        if(index < activeText[currentIndex].length)
        {   
            setPrintedText(prev => prev + activeText[currentIndex].charAt(index))
            setIndex(index + 1)
        }
        else 
        {
            clearInterval(timer);
        }
     }, 500);
      return () => clearInterval(timer);   
    },);

    useEffect(() =>
    { 
        if(printedText === activeText[currentIndex])
        {
            const deleteTimer = setTimeout(() =>
            {
                let newText = printedText;
                const deleteInterval = setInterval(() =>
                {
                    if(newText.length > 0)
                    {
                        // console.log('nos')
                        newText = newText.slice(0, -1);
                        setPrintedText(newText);
                       
                    }
                    else 
                    {
                        clearInterval(deleteInterval);
                         setIndex(0)
                        setCurrentIndex(prevIndex => (prevIndex + 1) % activeText.length);
                    }
                },  500);
            }, 1000);
            return () => clearTimeout(deleteTimer)
        }
    }, [printedText, currentIndex, activeText])
    return(
        <header className="header">
            <nav className="header__menu">
                <div className="header__logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="225" height="81" viewBox="0 0 225 94" fill="none">
                    <g filter="url(#filter0_i_1587_11465)">
                        <g filter="url(#filter1_f_1587_11465)">
                        <path d="M6 6.9278C6 9.81239 55.6604 78.7389 61.2298 83.4454C65.4069 87.0891 67.8822 88 73.4516 88C77.3192 88 81.8056 87.2409 83.3527 86.4818C86.7562 84.6599 130.693 24.9944 141.367 7.6869C142.45 5.86504 139.975 5.71323 126.825 6.32051C113.83 6.9278 110.736 7.53507 108.879 9.9642C107.641 11.4824 99.1326 23.3244 90.1597 36.0774L73.6063 59.3059L66.4898 49.5894C62.6222 44.2757 54.1134 32.2818 47.7705 23.0208L36.1676 6.16869L21.1611 6.01687C12.807 6.01687 6 6.47233 6 6.9278Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M54.1164 7.3867C52.4147 8.44944 54.7353 12.5486 64.9458 26.9716C72.0623 37.1435 78.7146 45.3419 79.4881 45.3419C81.4993 45.4937 94.1851 26.8197 94.1851 23.7833C94.1851 22.5688 91.091 18.166 87.3781 14.2186L80.571 6.77942L68.504 6.32395C61.697 6.17213 55.3541 6.47578 54.1164 7.3867Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M163.303 50.9937V88H169.104H174.906V50.9937V13.9874H169.104H163.303V50.9937Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M149.38 45.8712V72.0603H155.181H160.983V45.8712V19.6822H155.181H149.38V45.8712Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M135.457 47.0075V61.8101H140.098H144.739V47.0075V32.205H140.098H135.457V47.0075Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M123.855 46.4316V52.6942H127.336H130.817V46.4316V40.169H127.336H123.855V46.4316Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M184.192 54.9796V67.5048H186.513H188.834V54.9796V42.4544H186.513H184.192V54.9796Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M199.271 54.979V65.2269H201.592H203.913V54.979V44.7311H201.592H199.271V54.979Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M212.038 48.1494V52.704H215.519H219V48.1494V43.5947H215.519H212.038V48.1494Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M184.192 34.492V36.7693H186.513H188.834V34.492V32.2147H186.513H184.192V34.492Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M199.271 36.7599V39.0372H201.592H203.913V36.7599V34.4826H201.592H199.271V36.7599Z" fill="#0C0753" fillOpacity="0.3"/>
                        <path d="M109.964 57.0246C107.334 60.0611 104.085 64.7675 102.538 67.6521C99.7536 72.6622 99.7536 72.9658 102.693 78.2795C107.489 87.0851 110.274 88.1479 128.219 87.6924L143.999 87.2369L130.231 69.4739C122.805 59.6056 116.152 51.7109 115.534 51.5591C115.069 51.5591 112.439 53.9882 109.964 57.0246Z" fill="#0C0753" fillOpacity="0.3"/>
                        </g>
                        <path d="M4 4.9278C4 7.81239 53.6604 76.7389 59.2298 81.4454C63.4069 85.0891 65.8822 86 71.4516 86C75.3192 86 79.8056 85.2409 81.3527 84.4818C84.7562 82.6599 128.693 22.9944 139.367 5.6869C140.45 3.86504 137.975 3.71323 124.825 4.32051C111.83 4.9278 108.736 5.53507 106.879 7.9642C105.641 9.48241 97.1326 21.3244 88.1597 34.0774L71.6063 57.3059L64.4898 47.5894C60.6222 42.2757 52.1134 30.2818 45.7705 21.0208L34.1676 4.16869L19.1611 4.01687C10.807 4.01687 4 4.47233 4 4.9278Z" fill="#7B75FF"/>
                        <path d="M52.1164 5.3867C50.4147 6.44944 52.7353 10.5486 62.9458 24.9716C70.0623 35.1435 76.7146 43.3419 77.4881 43.3419C79.4993 43.4937 92.1851 24.8197 92.1851 21.7833C92.1851 20.5688 89.091 16.166 85.3781 12.2186L78.571 4.77942L66.504 4.32395C59.697 4.17213 53.3541 4.47578 52.1164 5.3867Z" fill="#7B75FF"/>
                        <path d="M161.303 48.9937V86H167.104H172.906V48.9937V11.9874H167.104H161.303V48.9937Z" fill="#7B75FF"/>
                        <path d="M147.38 43.8712V70.0603H153.181H158.983V43.8712V17.6822H153.181H147.38V43.8712Z" fill="#7B75FF"/>
                        <path d="M133.457 45.0075V59.8101H138.098H142.739V45.0075V30.205H138.098H133.457V45.0075Z" fill="#7B75FF"/>
                        <path d="M121.855 44.4316V50.6942H125.336H128.817V44.4316V38.169H125.336H121.855V44.4316Z" fill="#7B75FF"/>
                        <path d="M182.192 52.9796V65.5048H184.513H186.834V52.9796V40.4544H184.513H182.192V52.9796Z" fill="#7B75FF"/>
                        <path d="M197.271 52.979V63.2269H199.592H201.913V52.979V42.7311H199.592H197.271V52.979Z" fill="#7B75FF"/>
                        <path d="M210.038 46.1494V50.704H213.519H217V46.1494V41.5947H213.519H210.038V46.1494Z" fill="#7B75FF"/>
                        <path d="M182.192 32.492V34.7693H184.513H186.834V32.492V30.2147H184.513H182.192V32.492Z" fill="#7B75FF"/>
                        <path d="M197.271 34.7599V37.0372H199.592H201.913V34.7599V32.4826H199.592H197.271V34.7599Z" fill="#7B75FF"/>
                        <path d="M107.964 55.0246C105.334 58.0611 102.085 62.7675 100.538 65.6521C97.7536 70.6622 97.7536 70.9658 100.693 76.2795C105.489 85.0851 108.274 86.1479 126.219 85.6924L141.999 85.2369L128.231 67.4739C120.805 57.6056 114.152 49.7109 113.534 49.5591C113.069 49.5591 110.439 51.9882 107.964 55.0246Z" fill="#7B75FF"/>
                    </g>
                    <defs>
                        <filter id="filter0_i_1587_11465" x="3" y="4" width="222" height="89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="-3" dy="5"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.894118 0 0 0 0 0.937255 0 0 0 0.3 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1587_11465"/>
                        </filter>
                        <filter id="filter1_f_1587_11465" x="0" y="0" width="225" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_1587_11465"/>
                        </filter>
                    </defs>
                    </svg>
                </div>
                <div className="header__main-information">
                    <div className="header__company">
                        <div className="header__company-text">Company</div>
                        <div className="header__company-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#252422" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="header__services">
                        <div className="header__services-text">Our services</div>
                        <div className="header__services-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#252422" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="header__community">
                        <div className="header__comunity-text">
                            Community
                        </div>
                        <div className="header__community-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#252422" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="header__pricing">Pricing</div>
                </div>
                <div className="header__sign-in">
                    <span className="header__sign-in-text">Sign in</span>
                    <div className="header__sign-in-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.2806 12.5306L9.53063 16.2806C9.46094 16.3503 9.37822 16.4056 9.28717 16.4433C9.19613 16.481 9.09855 16.5004 9 16.5004C8.90145 16.5004 8.80387 16.481 8.71283 16.4433C8.62178 16.4056 8.53906 16.3503 8.46937 16.2806C8.39969 16.2109 8.34442 16.1282 8.3067 16.0372C8.26899 15.9461 8.24958 15.8485 8.24958 15.75C8.24958 15.6515 8.26899 15.5539 8.3067 15.4628C8.34442 15.3718 8.39969 15.2891 8.46937 15.2194L10.9397 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3897 1.5 12.1989 1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4697C1.86032 11.329 2.05109 11.25 2.25 11.25H10.9397L8.46937 8.78063C8.32864 8.63989 8.24958 8.44902 8.24958 8.25C8.24958 8.05098 8.32864 7.86011 8.46937 7.71937C8.61011 7.57864 8.80098 7.49958 9 7.49958C9.19902 7.49958 9.38989 7.57864 9.53063 7.71937L13.2806 11.4694C13.3504 11.539 13.4057 11.6217 13.4434 11.7128C13.4812 11.8038 13.5006 11.9014 13.5006 12C13.5006 12.0986 13.4812 12.1962 13.4434 12.2872C13.4057 12.3783 13.3504 12.461 13.2806 12.5306ZM18 3H12.75C12.5511 3 12.3603 3.07902 12.2197 3.21967C12.079 3.36032 12 3.55109 12 3.75C12 3.94891 12.079 4.13968 12.2197 4.28033C12.3603 4.42098 12.5511 4.5 12.75 4.5H18V19.5H12.75C12.5511 19.5 12.3603 19.579 12.2197 19.7197C12.079 19.8603 12 20.0511 12 20.25C12 20.4489 12.079 20.6397 12.2197 20.7803C12.3603 20.921 12.5511 21 12.75 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V4.5C19.5 4.10218 19.342 3.72064 19.0607 3.43934C18.7794 3.15804 18.3978 3 18 3Z" fill="#BF91FF"/>
                        </svg>
                    </div>
                </div>
                <div className="header__group">
                    <div className="header__wrapper-text">
                        <div className="header__static-text">Need better</div>
                        <div className="header__active-text">{printedText}?</div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;