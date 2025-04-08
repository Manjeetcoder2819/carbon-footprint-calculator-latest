import HeroSection from '@/components/HeroSection'; // ✅ Import HeroSection

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <HeroSection />

{/* IMAGE WITH TEXT Section */}
<div className="image-with-text">
<div className="page-width">
  <div className="image-with-text-block">
    <div className="image-container">
      <div className="media-banner">
        <img src="/img/about-img.png" alt="" title=""  />
      </div>
       
    </div>
    <div className="text-container">
        <div className="content-info">
          <h2>Believe it or not, your website affects the planet</h2>
  <p>Because every website relies on infrastructure to function, it consumes energy, which impacts the planet. Websites are stored in data centers—large facilities filled with servers that require constant power and cooling to operate efficiently. </p>
  <p>When someone visits a website, data is transferred from these data centers through transmission networks, which also use electricity. The more complex and data-heavy a website is, the more energy it consumes.
</p>
 
        </div>
    </div>
  </div>
</div>
</div>
{/* END Header Section */}






{/* HOW IT WORK Section */}
<div className="how-it-work-section" id="how_it_work">


  <div className="page-width">
    <div className="heading-section">
      <h2>How It Works</h2>
      <p>To estimate the environmental impact of the website, we consider factors such as internet data transfer, page load metrics, the energy used by data centers, the carbon intensity of electricity, and website engagement.


</p>
    </div>
   
   
    <div className="improvement-features">
      <div className="features-list list-item-1">
        <div className="icon">
          <img src="/img/data-flow.png" alt="" title="" width=" " height=" " />
        </div>
        <h3>Internet Data Flow</h3>
        <p>Internet Data Flow refers to how information travels between a website’s servers, networks, and user devices. </p>
        <p>It directly affects a website’s performance, energy consumption, and environmental impact.
<span className="dots"></span></p>


<div className="more-text"   style={{ display:'none'}} >
<p>Websites with large, unoptimized files, excessive scripts, and heavy media content require more data to be transferred, leading to slower load times, increased bandwidth usage, and higher electricity consumption in data centers and user devices. </p>
</div>
       
        <button   className="read-more">Read more</button>
      </div>
     
      <div className="features-list list-item-2">
        <div className="icon">
          <img src="/img/loading.png" alt="Page Load Data" width=" " height=" "/>
        </div>
        <h3>Page Load Data</h3>
        <p>Page Load Data refers to the initial information transferred when a website loads, significantly impacting energy consumption and carbon emissions. Website carbon calculators assess this data to estimate emissions.


<span className="dots"></span></p>
         <div className="more-text"   style={{ display:'none'}} ><p>The calculation considers page size, optimization, and load time. It multiplies data transfer by energy usage, accounting for grid efficiency and renewable sources. Repeat visits are adjusted for, considering cached files.</p>


</div>
        <button  className="read-more">Read more</button>
      </div>
     
     
      <div className="features-list list-item-3">
        <div className="icon">
          <img src="/img/electricity.png" alt="electricity" width=" " height=" "/>
        </div>
        <h3>Data Centre Power</h3>
        <p>Websites rely on data centers to store and process information, but these data centers consume a large amount of electricity, contributing to carbon emissions.
     
        </p>
        <p>A website carbon calculator helps measure these emissions by analyzing the energy sources powering the data center.
<span className="dots"></span></p>
          <div className="more-text"   style={{ display:'none'}} >
       
        <p>The website carbon calculator assesses factors such as energy consumption, power source, and carbon intensity to estimate the website’s environmental impact.


</p>
</div>
       
        <button  className="read-more">Read more</button>
      </div>
     
     
      <div className="features-list list-item-4">
        <div className="icon">
        <img src="/img/electrical.png" alt="Electricity Carbon Footprint" width=" " height=" "/>
        </div>
        <h3>Electricity Carbon Footprint</h3>
        <p>A website’s Electricity Carbon Footprint is the amount of greenhouse gas emissions created by the electricity used to run its servers, data centers, and network systems.
<span className="dots"></span></p>
       
        <div className="more-text"   style={{ display:'none'}}>
        <p>Every time someone visits a website, data is sent back and forth between servers and devices, which uses electricity.</p>
            <p>A website carbon calculator helps estimate these emissions by looking at key factors like how much data is transferred, how energy-efficient the servers are, whether renewable energy is used, and how much carbon is released by the electricity source.
</p>
           
         
        </div>


        <button  className="read-more">Read more</button>
      </div>
     
     
      <div className="features-list list-item-5">
        <div className="icon">
          <img src="/img/web-browser.png" alt="Website Engagement" width=" " height=" " />
        </div>
        <h3>Website Engagement</h3>
        <p>Website engagement plays a significant role in determining a website’s carbon footprint, as higher engagement leads to increased energy consumption.


</p>
        <span className="dots"></span><div className="more-text"  style={{ display:'none'}} >
            <p>A website carbon calculator evaluates engagement metrics to estimate the emissions generated by user interactions.


</p>
            <p>When users spend more time on a website—browsing pages, watching videos, or interacting with content—it requires more server processing, data transfer, and electricity, all of which contribute to carbon emissions.


</p>
        </div>
        <button  className="read-more">Read more</button>
      </div>
     
     
    </div>
   
   
 
   
  </div>
</div>


{/*END HOW IT WORK Section */}




{/* FAQ Section */}


<div className="faq-section" id="faq">
<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 1684.8 60" style={{ marginTop: "-18px", transform: "rotate(180deg)" }}><script xmlns="" id="pJZBtJ6ibBSWhSc6o5X8u3nqJq" type="text/javascript"></script>
<defs>


</defs>
<path style={{ fill: "#fff" }} className="st1" d="M1684.8,0c-64.4,0-102.4,5.8-140.4,11.7-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7c-38-5.8-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7-64.4-.1-102.4-5.9-140.4-11.7-38-5.9-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7C102.4,5.8,64.4,0,0,0v60h1684.8V0Z"></path>
<script xmlns=""></script></svg>
<div className="page-width">


<h2>FAQ</h2>
  <div className="faq-inner-container">
   
   
    <div className="faq-content-panel">
        <h3>Why is it necessary to measure the carbon footprint of a website?
</h3>
        <p>Measuring a website’s carbon footprint helps identify how much energy it uses, where emissions come from, and how to reduce them, making the website more eco-friendly and sustainable.</p>
    </div>
   
    {/*<div className="faq-content-panel">
        <h3>Can I delete the calculation data?</h3>
        <p>Yes.</p>
    </div> */}
   
    <div className="faq-content-panel">
        <h3>How does the website carbon calculator help?
</h3>
        <p>A Website Carbon Footprint Tool checks how much energy a website uses, how much data it transfers, and how efficiently it runs to determine its impact on the environment.
</p>
    </div>
   
     <div className="faq-content-panel">
        <h3>What is the average carbon footprint of a website?
</h3>
        <p>A website produces 0.5g to 1g of CO₂ per page view. Heavily trafficked or media-rich sites can have higher emissions.
</p>
    </div>
   
    <div className="faq-content-panel">
        <h3>What's a good carbon footprint?</h3>
        <p>Conducting website audits reveals that most sites can initially aim for 1 gram of carbon per page to reduce emissions. However, this benchmark may decrease as sustainability standards evolve.</p>
<p>Achieving under 0.5 grams per page indicates a strong environmental performance. Yet, a singular low-carbon page isn't sufficient; ideally, all website pages should strive for minimal carbon footprints.


</p>
    </div>
   
   
    <div className="faq-content-panel">
        <h3> How long does the calculation take?
</h3>
        <p>  Instantaneous to minutes, depending on complexity.


</p>
    </div>
   
   
    <div className="faq-content-panel">
        <h3>How accurate are the results?


</h3>
        <p>The results are estimates based on standard formulas and averages. For precise figures,                                            detailed data and customized assessments would be required. However, the calculator provides a reliable benchmark for your website’s impact.


</p>
    </div>
   
   
    <div className="faq-content-panel">
        <h3>Is data shared with third parties?  




</h3>
        <p>No, your data will not be shared with any third parties.


</p>
    </div>
   
   
   
   
   
  </div>
</div>
</div>


{/* END FAQ Section */}


{/* Get Badge */}
<div className="get-Badge" id="get_A_Badge">
<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 1684.8 60" style={{ marginTop: "-18px", transform: "rotate(180deg)" }}><script xmlns="" id="pJZBtJ6ibBSWhSc6o5X8u3nqJq" type="text/javascript"></script>
<defs>


</defs>
<path style={{ fill: "#f3f3f3" }} className="st5" d="M1684.8,0c-64.4,0-102.4,5.8-140.4,11.7-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7c-38-5.8-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7-64.4-.1-102.4-5.9-140.4-11.7-38-5.9-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7C102.4,5.8,64.4,0,0,0v60h1684.8V0Z"></path>
<script xmlns=""></script></svg>
<div className="page-width">
  <div className="badge-container">
    <div className="badge-content-details">
      <h2>Get Your Personalized Badge</h2>
      <p>A website carbon emission badge is a digital badge or label displaying a website's carbon footprint, typically measured in grams of CO2 equivalent (gCO2e) per page view or visitor.
</p>


    <button><Link href="#" className="btn-badge">Get the badge</Link></button>
    </div>
    <div className="badge-media">
      <img src="/img/corbon-img-3-2.png" alt="" title="" width=" " height=" "/>
     </div>
  </div>
</div>
</div>


{/*End Get Badge */}


{/* Services */}
<div className="services" id="services">
<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 1684.8 60" style={{ marginTop: "-18px", transform: "rotate(180deg)" }}>
<script xmlns="" id="pJZBtJ6ibBSWhSc6o5X8u3nqJq" type="text/javascript"></script>
<defs>


</defs>
<path style={{ fill: "#fff" }} className="st4" d="M1684.8,0c-64.4,0-102.4,5.8-140.4,11.7-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7c-38-5.8-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7-64.4-.1-102.4-5.9-140.4-11.7-38-5.9-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7C102.4,5.8,64.4,0,0,0v60h1684.8V0Z"></path>
<script xmlns=""></script></svg>


<div className="page-width">
  <div className="services-wrapper">
    <div className="services-heading">
      <h2>Our Services</h2>
    </div>


    <div className="services-cards">
      <div className="about-standardise_card-wrap">
      <div className="service-card">
        <div className="service-icon">
        <img src="/img/good-conversion-rate.png" alt="Logo" />
        </div>
        <div className="service-content">
          <h4 className="service-cont-heading">CONVERSION RATE OPTIMIZATION</h4>
          <p className="service-data-content">Conversion rates are a critical factor for the success of every e-commerce business. Based on the data-driven approach, we provide suggestions to improve UI/UX as well as conversion rates for your website.
</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 302 253" fill="none" className="about-standardise_blog-wrap blue"><path d="M173.216 190.044C138.106 210.821 101.012 251.92 65.611 252.67C30.0194 253.326 -3.78301 213.917 0.494834 177.92C4.77268 141.924 47.0368 109.531 71.6424 76.4682C96.248 43.4057 102.815 9.48582 120.051 1.89933C137.288 -5.68716 165.289 12.8694 201.707 25.4031C238.029 37.6525 283.149 44.067 296.743 66.8734C310.148 89.5859 292.124 128.975 266.692 148.847C241.26 168.72 208.325 169.268 173.216 190.044Z" fill="currentColor" className="blob-blue"></path></svg>
      </div>
      {/*  */}


      <div className="about-standardise_card-wrap">
      <div className="service-card two">
        <div className="service-icon">
        <img src="/img/research.png" alt="Logo" width=" " height=" "/>
        </div>
        <div className="service-content">
          <h4 className="service-cont-heading">Web Development</h4>
          <p className="service-data-content">We build fast, responsive, and eco-friendly websites optimized for performance and sustainability. Our development approach ensures a minimal carbon footprint while maintaining high functionality and user experience.
</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 221 275" fill="none" className="about-standardise_blog-wrap green"><path d="M147.928 1.1647C165.737 6.20164 175.069 55.5396 181.558 88.315C188.046 121.09 191.989 137.342 202.023 168.459C212.186 199.744 228.569 246.063 215.341 264.019C202.41 282.014 159.531 271.905 118.052 265.005C76.6118 257.807 36.2731 253.779 16.1637 231.494C-3.9458 209.208 -4.08505 168.328 9.51253 139.372C23.1488 110.118 50.69 92.6587 77.371 64.3423C104.091 35.7282 130.248 -3.70408 147.928 1.1647Z" fill="currentColor" className="blob-green"></path></svg> </div>
      {/*  */}


      <div className="about-standardise_card-wrap">
      <div className="service-card">
        <div className="service-icon">
        <img src="/img/web-developer.png" alt="Logo" width=" " height=" " />
        </div>
        <div className="service-content">
          <h4 className="service-cont-heading">Online business Development</h4>
          <p className="service-data-content">We provide tailored digital solutions to help businesses grow sustainably. From website creation to e-commerce optimization, we ensure your online presence is efficient, eco-friendly, and scalable.
</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 280 193" fill="none" className="about-standardise_blog-wrap orange"><path d="M210.855 169.152C179.658 186.675 150.338 196.599 123.723 190.876C96.8956 185.148 72.7673 163.986 46.1807 130.027C19.387 95.8517 -9.65279 48.8849 3.85577 25.213C17.1571 1.32395 73.0069 0.729855 117.374 0.926569C161.952 1.12829 195.053 1.90863 225.016 18.7501C255.19 35.5965 282.226 68.504 278.995 97.5135C275.763 126.523 242.264 151.634 210.855 169.152Z" fill="currentColor" className="blob-orange"></path></svg></div>
      {/*  */}


      <div className="about-standardise_card-wrap">
      <div className="service-card four">
        <div className="service-icon">
        <img src="/img/exchange-rate.png" alt="Logo" width=" " height=" "/>
        </div>
        <div className="service-content">
          <h4 className="service-cont-heading">App/Plugin Development</h4>
          <p className="service-data-content">We create custom apps and plugins that enhance functionality while prioritizing energy efficiency. Our solutions help optimize website performance and reduce digital carbon footprints.</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 276 213" fill="none" className="about-standardise_blog-wrap red"><path d="M41.9869 57.8372C23.7339 76.3025 9.51346 98.5881 3.35837 127.029C-2.79672 155.47 -1.09875 190.278 17.1543 201.102C35.1951 212.139 70.0032 199.404 106.509 201.527C143.228 203.437 181.856 220.204 214.117 209.167C246.166 198.131 271.848 159.502 275.456 117.266C278.852 75.2413 260.387 29.6088 228.125 10.9313C195.864 -7.53397 150.232 1.16804 116.273 12.8415C82.3134 24.5149 60.0277 39.372 41.9869 57.8372Z" fill="currentColor" className="blob-red"></path></svg>
    </div>
      {/*  */}
    </div>
  </div>
</div>






</div>


{/* END Services */}





{/* Green Panel */}
<div className="green-panel">


<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" viewBox="0 0 1684.8 60" style={{ marginTop: "-38px", transform: "inherit" }}  ><script xmlns="" id="pJZBtJ6ibBSWhSc6o5X8u3nqJq" type="text/javascript"></script>
<defs>


</defs>
<path style={{ fill: "#fff" }} className="st3" d="M1684.8,0c-64.4,0-102.4,5.8-140.4,11.7-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7c-38-5.8-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7-64.4-.1-102.4-5.9-140.4-11.7-38-5.9-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7C102.4,5.8,64.4,0,0,0v60h1684.8V0Z" ></path>
<script xmlns=""></script></svg>


<div className="page-width">
<div className="green-panel-container">


<div className="logo-icon">
  <img width=" " height=" " src="/img/agteq-logo-v2.png" alt="" title="" />
</div>
  <div className="logo-info">
    <p>AGTEQ Infosoft presents its website carbon calculator tool, fostering awareness and action toward a carbon-neutral internet. Powered by 100% renewable energy, this resource guides users in making eco-friendly digital choices.</p>
 
  </div>


</div>
</div>
</div>


{/* END Green Panel */}

</>
  );
}
