import React from "react";
import './css/About.css';

function About() {
    return (
        <div id='about' className="md:ml-10 md:mr-10 mr-5 ml-5 mt-2 pt-5 pb-10 pl-1 pr-2">
            <h1 className="text-4xl pt-5 pb-1">Who we are</h1>

            <div className="paragraph">
                <div>
                <video muted autoPlay loop playsInline>
                    <source src="https://hif-greece.s3.ap-northeast-1.amazonaws.com/WEB.mp4" type="video/mp4" />
                </video>
                </div>

                <div>
                    <p className="pb-5 pl-1 pr-1 mt-1 mb-2">
                        HIF takes pride in its team of highly experienced professionals in financial investment, real estate development, construction, education, and international relations. By its strong commitment to professionalism and satisfactory client experience, our organization is structured into key divisions covering design and construction, project management, real estate leasing and management, client care and community relations development in Greece.
                    </p>
                    <p className="pb-5 pl-1 pr-1 mt-1 mb-2">
                        We also specialize in the procurement, storage, and delivery of bulk materials, we serve clients across the world. Our commitment to responsible trade ensures we consistently meet the highest standards in operational efficiency, safety, and quality throughout our supply chain.
                    </p>
                    <p className="pb-5 pl-1 pr-1 mt-1 mb-2">
                        HIF CONSULTING (SINGAPORE) PTE. LTD. was founded with a mission to support both developing and established resource companies, united by a vision to create a brighter, more sustainable future for the industry.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About
