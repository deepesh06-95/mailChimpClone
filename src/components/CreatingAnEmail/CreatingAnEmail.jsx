import styles from "./CreatingAnEmail.module.css";
import { LeftDiv } from "../Dashboard/StyledComponent";
import { useState } from "react";
import {Link} from "react-router-dom"
export const CreatingAnEmail = () => {
    const [compaignName, setCompaignName] = useState("");

    const handleClick = ()=>{
        localStorage.setItem("Compaign Name", JSON.stringify(compaignName))
    }

    return (
        <>
            <LeftDiv></LeftDiv>
            <div className={styles.LeftNav}>
                {/* left side-bar */}

                {/* containing main items sidebar */}
                <div className={styles.Wrapper}>
                    {/* logo div */}
                    <div className={styles.Logo}>
                        <svg
                            width="9"
                            height="13"
                            viewBox="0 0 9 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.19995 2.11443L3.19995 6.40015L8.19995 10.6859L7.19995 12.4001L0.199951 6.40015L7.19995 0.400146L8.19995 2.11443Z"
                                fill="#2C2C2C"
                            />
                        </svg>

                        <svg
                            width="40"
                            height="50"
                            viewBox="0 0 44 47"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M42.3376 29.5492L42.3366 29.5462C42.2876 29.5462 42.2566 29.5492 42.2566 29.5492C42.2566 29.5492 42.1066 28.9462 41.9246 28.3622C41.7426 27.7792 41.5516 27.4152 41.5516 27.4152L41.6646 27.2412L41.6626 27.2372C42.2796 26.2172 42.2946 25.3452 42.1976 24.7912C42.0872 24.0918 41.759 23.4451 41.2596 22.9432L41.2326 22.9162C40.4986 22.1972 39.4796 21.6932 37.8246 21.2282C37.6346 21.1752 37.4656 21.1312 37.3166 21.0932C37.1961 21.0594 37.0761 21.0241 36.9566 20.9872L36.9416 20.8582C36.9356 20.4212 36.9106 18.9402 36.8726 18.0762C36.8456 17.4522 36.7916 16.4782 36.4896 15.5182C36.1296 14.2192 35.5016 13.0822 34.7176 12.3552C36.8796 10.1142 38.2296 7.64517 38.2276 5.52617C38.2206 1.45217 33.2176 0.220171 27.0516 2.77317L27.0326 2.78117C26.6011 2.92951 26.1804 3.10761 25.7736 3.31417L25.7456 3.32717C24.9476 2.54381 24.1486 1.76148 23.3486 0.980171C16.3186 -5.15083 -5.65942 19.2782 1.36858 25.2122L2.90358 26.5122C2.50558 27.5442 2.34858 28.7272 2.47658 29.9982C2.64058 31.6312 3.48258 33.1962 4.84758 34.4062C6.14358 35.5542 7.77758 36.2362 9.33758 36.2782L9.47458 36.2802H9.50158C12.2356 42.5802 18.3096 46.2972 25.5176 46.6522L25.8026 46.6642V46.6662H25.8096V46.6642C33.5236 46.9372 40.2636 43.2102 43.0286 36.5862C43.3766 35.6902 45.3186 30.3112 42.3376 29.5502V29.5492ZM10.1056 34.5092C9.86658 34.5492 9.62358 34.5652 9.37758 34.5592C7.00458 34.4962 4.44058 32.3592 4.18558 29.8252C3.90458 27.0252 5.33558 24.8692 7.86958 24.3582C8.21974 24.2889 8.57714 24.2634 8.93358 24.2822C10.3536 24.3602 12.4446 25.4502 12.9236 28.5422C13.3466 31.2822 12.6736 34.0702 10.1056 34.5082V34.5092ZM7.44558 22.6842L7.45558 22.6822C9.40858 17.3352 12.8156 12.3262 17.2536 8.90917C17.3376 8.83917 17.4236 8.76917 17.5136 8.69917C19.7006 6.91417 21.9416 5.39417 24.0986 4.19117C24.0986 4.19117 22.1856 1.97317 21.6086 1.81017C18.0556 0.850171 10.3796 6.14317 5.47858 13.1362C3.49658 15.9662 0.65858 20.9762 2.01558 23.5542C2.18258 23.8742 3.12958 24.6942 3.63758 25.1182C4.48758 23.8832 5.78758 23.0182 7.44558 22.6842ZM16.4856 13.1312C18.2316 11.1082 20.3856 9.34817 22.3146 8.36117C22.3806 8.32717 22.4516 8.39917 22.4146 8.46417C22.2616 8.74417 21.9646 9.34217 21.8736 9.79217C21.8606 9.85817 21.9336 9.90617 21.9896 9.86817C23.1876 9.05017 25.3536 8.32017 27.1846 8.21217C27.2626 8.20717 27.2956 8.31017 27.2296 8.35217C26.9446 8.52917 26.5006 8.83417 26.2976 9.13017C26.29 9.14105 26.2854 9.15372 26.2843 9.16692C26.2831 9.18012 26.2854 9.19339 26.291 9.20542C26.2966 9.21745 26.3052 9.22781 26.316 9.23549C26.3268 9.24316 26.3394 9.24788 26.3526 9.24917C27.6206 9.36617 29.4196 9.69917 30.6776 10.2952C30.7596 10.3342 30.7156 10.4572 30.6276 10.4372C28.8506 10.0272 25.9226 9.71017 22.8816 10.4522C20.1646 11.1152 18.0936 12.1412 16.5866 13.2422C16.5146 13.2952 16.4266 13.1992 16.4856 13.1322V13.1312ZM39.6396 38.0922C41.1166 36.5492 41.9956 34.8712 42.3366 32.8032C42.5046 31.6972 42.2586 31.2692 41.9246 31.0632C41.5706 30.8452 41.1466 30.9212 41.1466 30.9212C41.1466 30.9212 40.9536 29.5972 40.4066 28.3952C38.7836 29.6752 36.6946 30.5752 35.1036 31.0322C33.2676 31.5592 30.7836 31.9642 28.0126 31.7992C27.7106 31.7752 27.4286 31.7382 27.1676 31.7042C26.0996 31.5642 25.3826 31.4702 25.0746 32.4692C25.1708 32.5088 25.2682 32.5455 25.3666 32.5792C25.5096 32.6272 25.6566 32.6722 25.8046 32.7142C26.4024 32.8854 27.0102 33.0193 27.6246 33.1152C27.9326 33.1642 28.2416 33.2082 28.5526 33.2402C29.0183 33.2895 29.4862 33.3162 29.9546 33.3202C30.3264 33.3293 30.6984 33.3227 31.0696 33.3002C31.1676 33.2962 31.2656 33.2922 31.3636 33.2862C31.6766 33.2642 31.9896 33.2362 32.3056 33.2052C32.3363 33.2028 32.3669 33.2113 32.3919 33.2293C32.417 33.2472 32.4349 33.2734 32.4426 33.3033C32.4502 33.3332 32.4471 33.3647 32.4337 33.3925C32.4204 33.4203 32.3977 33.4425 32.3696 33.4552L32.3606 33.4592C32.0586 33.5872 31.7456 33.6892 31.4276 33.7692C30.9495 33.8871 30.4619 33.9628 29.9706 33.9952C29.4789 34.0267 28.9859 34.0331 28.4936 34.0142C28.1651 34.0005 27.8372 33.9752 27.5106 33.9382C27.0203 33.8788 26.5331 33.7964 26.0506 33.6912C25.6872 33.6088 25.3286 33.5063 24.9766 33.3842C25.1016 34.4482 26.1386 34.9252 26.6346 35.1182C27.0583 35.2754 27.4954 35.3939 27.9406 35.4722C33.5606 36.4392 38.8156 33.2262 39.9986 32.4162C40.0866 32.3562 40.1456 32.4152 40.0746 32.5222C40.0388 32.5791 40.0001 32.6342 39.9586 32.6872C38.5106 34.5552 34.6186 36.7172 29.5546 36.7172C27.3446 36.7172 25.1376 35.9382 24.3276 34.7432C23.0696 32.8882 24.2656 30.1802 26.3606 30.4622C26.3626 30.4622 27.0776 30.5422 27.2786 30.5662C31.6866 31.0592 37.0086 29.6072 39.3726 27.4242L39.4886 27.3412C40.3076 26.5692 40.7246 25.7712 40.5906 25.0702C40.5363 24.7026 40.3632 24.363 40.0976 24.1032C39.5846 23.6002 38.7696 23.2092 37.3956 22.8232L37.2816 22.7912L37.1366 22.7512C36.8166 22.6612 36.5666 22.5922 36.3016 22.5052C35.7116 22.3112 35.4196 22.1552 35.3536 21.0452C35.3236 20.5592 35.2396 18.8692 35.2096 18.1702C35.1556 16.9462 35.0086 15.2722 33.9696 14.5822C33.7052 14.4087 33.3986 14.3105 33.0826 14.2982C32.8276 14.2862 32.6776 14.3212 32.5976 14.3402L32.5556 14.3502C31.9956 14.4442 31.6516 14.7322 31.2456 15.0702L31.1756 15.1302C29.8806 16.2092 28.7866 16.3852 27.5716 16.3332C27.1916 16.3172 26.8016 16.2792 26.3886 16.2382C26.0106 16.2012 25.6146 16.1622 25.1916 16.1372L25.0916 16.1312C24.9526 16.1232 24.8146 16.1142 24.6756 16.1072C22.6396 16.0032 20.4556 17.7622 20.0916 20.2602C19.6866 23.0472 21.2246 24.7542 22.2246 25.8652C22.4726 26.1402 22.6866 26.3782 22.8316 26.5872C22.9372 26.7301 22.9891 26.9057 22.9781 27.0831C22.9671 27.2605 22.894 27.4283 22.7716 27.5572L22.7726 27.5582C20.6946 29.6952 20.0306 33.0902 20.8126 35.9182C20.9116 36.2722 21.0346 36.6102 21.1826 36.9322C23.0186 41.2262 28.7176 43.2252 34.2856 41.4062C35.0144 41.1683 35.7219 40.8696 36.4006 40.5132C37.6195 39.9115 38.7177 39.0912 39.6406 38.0932L39.6396 38.0922ZM33.0796 22.0552C33.4196 22.0152 33.7466 22.0132 34.0466 22.0552C34.2196 21.6572 34.2496 20.9712 34.0936 20.2242C33.8616 19.1132 33.5476 18.4412 32.8986 18.5462C32.2486 18.6502 32.2256 19.4552 32.4576 20.5662C32.5876 21.1902 32.8206 21.7252 33.0796 22.0562V22.0552ZM27.5076 22.9352C26.5066 22.5032 25.7306 22.3702 24.2676 22.8412L24.1526 22.8792C23.8616 22.9742 23.6586 23.0402 23.5296 23.0342C23.5161 23.0335 23.5028 23.0319 23.4896 23.0292C23.4206 23.0152 23.3736 22.9722 23.3596 22.9102C23.3176 22.7192 23.6126 22.4032 23.9236 22.1762C24.8636 21.4992 26.0836 21.3532 27.1076 21.7932C27.6076 22.0062 28.0786 22.3862 28.3076 22.7602C28.4186 22.9412 28.4406 23.0812 28.3686 23.1552C28.2566 23.2732 28.0336 23.1722 27.6286 22.9892H27.6276L27.5076 22.9342V22.9352ZM26.5726 23.4672C26.4786 23.4772 26.3916 23.4972 26.3066 23.5172L26.3006 23.5182C26.2756 23.524 26.2506 23.5297 26.2256 23.5352C25.9293 23.6099 25.654 23.7511 25.4206 23.9482C25.2376 24.1082 25.1246 24.2842 25.1256 24.4082C25.1256 24.4682 25.1516 24.5012 25.1716 24.5182C25.1996 24.5432 25.2316 24.5542 25.2716 24.5562C25.3546 24.5602 25.4676 24.5202 25.6226 24.4662L25.7136 24.4342C26.3218 24.2017 26.9797 24.1304 27.6236 24.2272L27.6616 24.2322C27.9406 24.2652 28.1086 24.2852 28.1756 24.1802C28.1956 24.1502 28.2196 24.0852 28.1586 23.9872C28.0166 23.7572 27.4056 23.3692 26.5726 23.4672ZM32.2076 25.2472C32.0606 25.5472 31.6076 25.6262 31.1976 25.4242C30.7876 25.2222 30.5736 24.8162 30.7206 24.5172C30.8676 24.2172 31.3206 24.1372 31.7306 24.3402C32.1406 24.5412 32.3546 24.9482 32.2076 25.2472ZM33.8376 23.1172C33.5046 23.1112 33.2276 23.4772 33.2196 23.9352C33.2116 24.3932 33.4766 24.7682 33.8096 24.7742C34.1436 24.7802 34.4196 24.4142 34.4276 23.9562C34.4356 23.4982 34.1716 23.1232 33.8376 23.1172ZM11.0766 31.3252C11.2086 31.2952 11.3446 31.2632 11.4276 31.3672C11.4576 31.4012 11.5056 31.4802 11.4496 31.6092C11.3546 31.8292 10.9816 32.1292 10.4476 32.1092C9.89758 32.0662 9.28758 31.6662 9.20358 30.6722C9.16358 30.1822 9.34858 29.5832 9.46358 29.2712C9.68358 28.6662 9.48358 28.0332 8.96758 27.6942C8.82025 27.5973 8.65526 27.5305 8.48207 27.4975C8.30887 27.4646 8.13086 27.4661 7.95826 27.5021C7.78566 27.538 7.62184 27.6077 7.47621 27.707C7.33058 27.8064 7.20599 27.9336 7.10958 28.0812C6.95158 28.3282 6.85458 28.6362 6.80358 28.8012C6.78958 28.8462 6.77858 28.8812 6.76958 28.9032C6.65358 29.2162 6.46758 29.3082 6.34258 29.2912C6.28258 29.2832 6.20058 29.2432 6.14858 29.1002C6.00558 28.7082 6.12158 27.6002 6.85858 26.7862C7.10026 26.5276 7.39993 26.3302 7.73289 26.2103C8.06584 26.0903 8.42254 26.0512 8.77358 26.0962C9.51558 26.1902 10.1326 26.6392 10.5106 27.3592C11.0136 28.3172 10.5656 29.3222 10.2986 29.9222L10.2936 29.9322C10.2683 29.9882 10.2436 30.0446 10.2196 30.1012C10.0526 30.4992 10.0436 30.8472 10.1956 31.0812C10.3126 31.2602 10.5196 31.3652 10.7656 31.3692C10.8796 31.3712 10.9836 31.3472 11.0756 31.3262H11.0766V31.3252Z"
                                fill="black"
                            />
                        </svg>
                    </div>

                    {/* drop down bar */}
                    <div className={styles.MiddleDiv}>
                        <div className={styles.Email}>
                            Email{" "}
                            <svg
                                width="14"
                                height="8"
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.00024 0L7.00024 5L12.0002 0L14.0002 1L7.00024 8L0.000244141 1L2.00024 0Z"
                                    fill="#DBD9D2"
                                />
                            </svg>
                        </div>
                        <div className={styles.dropDown}>
                            {" "}
                            <div className={styles.Regular}>
                                Regular{" "}
                                <svg
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 1.99997L6 14L0.5 8.49997L1.91 7.08997L6 11.17L16.59 0.589966L18 1.99997Z"
                                        fill="#007C89"
                                    />
                                </svg>
                            </div>
                            <div>Plain Text </div>
                            <div>Template</div>{" "}
                        </div>
                        {/* general info options */}
                        <div>
                            <div className={styles.Email}>Customer Journey</div>
                            <div className={styles.website}>
                                Website{" "}
                                <svg
                                    width="14"
                                    height="8"
                                    viewBox="0 0 14 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.00024 0L7.00024 5L12.0002 0L14.0002 1L7.00024 8L0.000244141 1L2.00024 0Z"
                                        fill="#DBD9D2"
                                    />
                                </svg>
                            </div>
                            <div className={styles.Email}>Landing Page</div>
                            <div className={styles.Email}>Multichannel Designs</div>
                        </div>
                    </div>
                    <div className={styles.lastMiddle}></div>
                    {/* last section */}
                    <div className={styles.bottomDiv}>
                        <div>
                            Signup Form{" "}
                            <svg
                                width="14"
                                height="8"
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.00024 0L7.00024 5L12.0002 0L14.0002 1L7.00024 8L0.000244141 1L2.00024 0Z"
                                    fill="#DBD9D2"
                                />
                            </svg>
                        </div>
                        <div>Survey</div>
                    </div>
                </div>
            </div>
            <div className={styles.Container}>
                <div className={styles.createEmail}>Create an email</div>
                <div className={styles.description}>
                    Keep your subscribers engaged by sharing your latest news, promoting a
                    line of products, or announcing an event.
                </div>
                <div>
                    <div className={styles.inputBoxLabel}>
                        <p>Campaign Name</p>
                        {compaignName.length > 0 ? <p>{compaignName.length}/100</p> : null}
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <input
                        type="text"
                        maxLength="100"
                        onChange={(e) => setCompaignName(e.target.value)}
                        style={{
                            border:
                                compaignName.length > 0
                                    ? "1px solid #007C89"
                                    : "0.8px solid #666666",
                        }}
                    />
                </div>
                <button className={styles.Button} onClick={handleClick}><Link to="/campaigns">Begin</Link></button>
            </div>
        </>
    );
};
