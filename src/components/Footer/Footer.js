import React from 'react'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink } from './Footer.elements'
import { Button } from '../../globalStyles'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends.
                </FooterSubHeading>
                 <FooterSubText>
                     You can unsubscribe at any time.
                 </FooterSubText>
                   <Form>
                       <FormInput name="email" type="email" placeholder="Your Email" />
                           <Button fontBig>Subscribe</Button> 
                   </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Us
                        </FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Career</FooterLink>
                        <FooterLink to="/">Investors</FooterLink> 
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Contact Us
                        </FooterLinkTitle>
                        <FooterLink to="/sign-up">Contact Us</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Career</FooterLink>
                        <FooterLink to="/">Investors</FooterLink> 
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Videos
                        </FooterLinkTitle>
                        <FooterLink to="/sign-up">Videos</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Career</FooterLink>
                        <FooterLink to="/">Investors</FooterLink> 
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                        <FooterLink to="/sign-up">Social Media</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Career</FooterLink>
                        <FooterLink to="/">Investors</FooterLink> 
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        ULTRA 
                    </SocialLogo>
                    <WebsiteRights>
                        ULTRA 2020
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
