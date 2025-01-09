import * as React from 'react'
import BlackLogo from "../Layouts/logo/CBILogoBlack";
import {Separator} from "@/Components/ui/separator.jsx";
import {Button} from "@/Components/ui/button.jsx";

export const Footer = () => {
    return (
        <footer>
            <section className="gvnjGp border border-t-black border-b-black border-b-4 rounded-none" style={{ backgroundColor: "#EDEDED" }}>
                <div className="eMVRpx">
                    <div className="footer-logo items-center">
                        <div className="logo-col">
                            {/*<BlackLogo className="grid"/>*/}
                        </div>
                        <div className="links-col">
                            <div className="flex lg:justify-end">
                                <ul id="menu-td-demo-header-menu-5" className="flex flex-wrap lg:flex-nowrap gap-3">
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-216">
                                        <a href="">
                                            <span className="td-blm-menu-item-txt">
                                                <h2 className="zTZri">Blog</h2>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-212">
                                        <a href=""><span
                                            className="td-blm-menu-item-txt">
                                            <h2 className="zTZri">Education</h2>
                                        </span></a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-213">
                                        <a href=""><span
                                            className="td-blm-menu-item-txt"><h2
                                            className="zTZri">Health</h2></span></a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-214">
                                        <a href=""><span
                                            className="td-blm-menu-item-txt"><h2 className="zTZri">Lifestyle</h2></span></a>
                                    </li>
                                </ul>
                            </div>
                            <Separator decorative={true} className="border-black border-1 my-2"/>
                            <div className="flex lg:justify-end">
                                <ul id="menu-td-demo-custom-menu-3" className="flex flex-wrap lg:flex-nowrap gap-3">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-443">
                                        <a href="#"><span className="td-blm-menu-item-txt">About</span></a></li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-444">
                                        <a href="#"><span className="td-blm-menu-item-txt">Contact</span></a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-445">
                                        <a href="#"><span className="td-blm-menu-item-txt">Privacy Policy</span></a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-446">
                                        <a href="#"><span className="td-blm-menu-item-txt">Newsletter</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gvnjGp">
                <div className="eMVRpx">
                    <div className="grid-container">
                        <div data-testid="manchester-article" className="sc-e5949eb5-1 grid-item">
                            <div data-testid="card-text-wrapper" className="sc-e5949eb5-2 eOoDdE">
                                <div className="sc-4fedabc7-1 kbvCmj">
                                    <div className="sc-4fedabc7-0 kZtaAl">
                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 zTZri">
                                            About Us
                                        </h2>
                                    </div>
                                </div>
                                <p data-testid="card-description" className="gpCoKv" style={{ fontWeight: "bold" }}>
                                </p>
                                <div className="hJDQRX">
                                    <span data-testid="card-metadata-lastupdated" className="dsUUMv"></span>
                                    <div data-testid="card-metadata-separator" className="lmDmEx"></div>
                                    <span data-testid="card-metadata-tag" className="eRsxHt"></span>
                                </div>
                            </div>
                        </div>
                        <div data-testid="manchester-article" className="sc-e5949eb5-1 grid-item">
                            <div data-testid="card-text-wrapper" className="sc-e5949eb5-2 eOoDdE">
                                <div className="sc-4fedabc7-1 kbvCmj">
                                    <div className="sc-4fedabc7-0 kZtaAl">
                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 zTZri">
                                            Latest Articles
                                        </h2>
                                    </div>
                                </div>
                                <p data-testid="card-description" className="gpCoKv" style={{fontWeight: "bold"}}>
                                    Know about citizenship opportunities to avoid border restrictions and travel visa
                                    free to Europe, UK, USA and other destinations.
                                </p>
                                <div className="hJDQRX">
                                    <span data-testid="card-metadata-lastupdated" className="dsUUMv">1 hr ago</span>
                                    <div data-testid="card-metadata-separator" className="lmDmEx"></div>
                                    <span data-testid="card-metadata-tag" className="eRsxHt">World</span>
                                    <div data-testid="card-metadata-separator" className="lmDmEx"></div>
                                    <span data-testid="card-metadata-tag" className="eRsxHt">World</span>
                                </div>
                            </div>
                        </div>
                        <div data-testid="manchester-article" className="sc-e5949eb5-1 grid-item">
                            <div data-testid="card-text-wrapper" className="sc-e5949eb5-2 eOoDdE">
                                <div className="sc-4fedabc7-1 kbvCmj">
                                    <div className="sc-4fedabc7-0 kZtaAl">
                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 zTZri">
                                            Popular Articles
                                        </h2>
                                    </div>
                                </div>
                                <p data-testid="card-description" className="gpCoKv" style={{ fontWeight: "bold" }}>
                                    Know about citizenship opportunities to avoid border restrictions and travel visa free to Europe, UK, USA and other destinations.
                                </p>
                                <div className="hJDQRX">
                                    <span data-testid="card-metadata-lastupdated" className="dsUUMv">1 hr ago</span>
                                    <div data-testid="card-metadata-separator" className="lmDmEx"></div>
                                    <span data-testid="card-metadata-tag" className="eRsxHt">World</span>
                                </div>
                            </div>
                        </div>
                        <div data-testid="manchester-article" className="sc-e5949eb5-1 grid-item">
                            <div data-testid="card-text-wrapper" className="sc-e5949eb5-2 eOoDdE">
                                <div className="sc-4fedabc7-1 kbvCmj">
                                    <div className="sc-4fedabc7-0 kZtaAl">
                                        <h2 data-testid="card-headline" className="sc-4fedabc7-3 zTZri font-bold">
                                            SUBSCRIBE
                                        </h2>
                                    </div>
                                </div>
                                <form action="" className="">
                                    <div className="flex flex-column gap-3 ">
                                        <div className="flex items-center input-wrap flex-grow flex-shrink">
                                            <input type="email" className="newsletter-email w-full" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <Button className="w-full" variant="ghost">SUBSCRIBE</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#EDEDED] py-4 text-black">
                {/* Add footer content here */}
                <div className="container mx-auto px-4 ">
                    <p className="text-center">
                        &copy; 2024 <a target="_blank"
                                       href="https://pakistantoday24.com/">
                        <span className="uppercase text-[#62aa57]">Pakistan Today</span>
                    </a>. All
                        rights reserved.
                    </p>
                    <p className="text-center">
                        Developed By <a target="_blank"
                                       href="https://www.linkedin.com/in/hamaad-kaleem-584a52207/">
                        <span className="uppercase text-[#62aa57]">Hamaad Kaleem</span>
                    </a>
                    </p>
                </div>
            </section>
        </footer>
    )
}
