import React from "react";
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel: +918619006139'>(+91) 86190-06139 </LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto: sgr.mhshwr22@gmail.com'>
						sgr.mhshwr22@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com/sagar-maheshwari653'>
						<AiFillGithub size='3rem' />
					</SocialIcons>

					<SocialIcons href='https://www.linkedin.com/in/sagar-maheshwari-3330b6166/'>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>

					<SocialIcons href='https://twitter.com/sagar_maheshh'>
						<AiFillTwitterCircle size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
