import React from 'react';
import './Contact.styles.css';

const Contact = () => (
  <div classNameName="container">
    <div className="one-third column">
      <h2 id="line1">unachoza</h2>
      <h2 id="line2">@gmail.com</h2>
    </div>
    <div className="one-third column">
      <h2>415-310-7944</h2>
    </div>
    <div className="one-third column">
      <h2>New York, NY</h2>
    </div>

    <div class="one-third column" data-scroll-reveal="enter bottom move 100px over 0.6s after 0.3s">							
						<div class="contact-block">																
							<div class="text">				
<a href="https://linkedin.com/in/arianna-choza"class="animsition-link" target=”_blank” >
						<h5><span><i class="fa fa-linkedin-square " aria-hidden="true"></i></span class="chaffle"> linkedin</h5>	
</a>
				
							</div>
						</div>
					</div>	
									<div className="one-third column" data-scroll-reveal="enter bottom move 100px over 0.6s after 0.3s">							
    <div className="contact-block">		
      <a href=""></a>
													<a href="https://github.com/unachoza"className="animsition-link" target="_blank">

        <h5>
          <span><i className="fa fa-github-square" aria-hidden="true"></i></span>
          github</h5>
                </a>
					

												</div>
											</div>
										</div>	
										<div className="one-third column" data-scroll-reveal="enter bottom move 100px over 0.6s after 0.3s">							
											<div className="contact-block">																
												<div className="text">				

<a href="
https://res.cloudinary.com/dh41vh9dx/image/upload/v1579919128/Arianna_Choza_-_Frontend.pdf" className="animsition-link" target="_blank">

		<h5><span> <i className="fa fa-file-text-o" aria-hidden="true"></i>
					<> resume</h5>	
</a>
											

												</div>
											</div>
										</div >	
                      
);

export default Contact;
