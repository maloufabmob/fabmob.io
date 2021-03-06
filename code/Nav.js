import React, { useState } from 'react'
import Emoji from 'Components/Emoji'
import { Link, LangSwitch } from 'Components/Lang'
import colors from 'Components/colors'
import LogoSansTexte from 'Images/logo fabmob sans texte.svg'
import { useLocation } from 'react-router-dom'

export default () => {
	let location = useLocation()
	const [open, setOpen] = useState(false)
	return (
		<nav
			css={`
				font-weight: bold;
				margin: 0 auto;
				width: 100%;
				padding: 0.6rem 0;
				box-shadow: var(--box-shadow) var(--color-bg-secondary);
				border-bottom: 1px solid var(--color-bg-secondary);
				display: flex;
				align-items: center;
				justify-content: center;

				ul {
					justify-content: center;
					flex-wrap: wrap;
					align-items: center;
					display: flex;
					list-style: none;
					padding: 0;
				}
				ul > li {
					display: inline-block;
					margin: 0.4rem 0.6rem;
					position: relative;
					text-align: left;
					text-transform: uppercase;
					font-size: 110%;
				}
				/* Nav Dropdown */
				ul li:hover ul {
					display: block;
				}
				ul > li > a {
					color: black;
				}
				.emoji {
					margin: 0;
				}
				img {
					margin: 0rem 2rem;
					width: 4rem;
				}
				> a {
					${location.pathname === '/' ? 'display: none;' : ''}
				}

				@media (max-width: 800px) {
					justify-content: space-evenly;

					img {
						width: 3rem;
					}
					ul {
						flex-direction: column;
						align-item: end;
						${open ? 'display: flex' : 'display: none'}
					}
				}
			`}
		>
			<Link to="/">
				<img css="" src={LogoSansTexte} />
			</Link>

			<ul>
				<li css="position: relative">
					<Link to="/à-propos">À propos</Link>
				</li>
				<li>
					<Link to="/communs">Nos communs</Link>
				</li>
				<li>
					<Link to="/événements">Événements</Link>
					<Notifications count={2} />
				</li>
				<li>
					<Link to="/blog">Blog</Link>
					<Notifications count={2} />
				</li>
				<li
					css={`
						padding: 0.2rem 0.3rem;
						a {
							color: ${colors.bleu} !important;
						}
					`}
				>
					<Link to="/participer">Participer</Link>
				</li>
				{false && (
					<li>
						<LangSwitch />
					</li>
				)}
			</ul>
			<div
				title={open ? 'Fermer le menu' : 'Ouvrir le menu'}
				css={`
					cursor: pointer;
					border: none;
					padding: 0;
					margin: 0;
					svg {
						width: 2rem;
						height: 2rem;
					}

					display: none;
					@media (max-width: 800px) {
						display: block;
					}
				`}
				onClick={() => setOpen(!open)}
			>
				{open ? <CloseMenuIcon /> : <MenuIcon />}
			</div>
		</nav>
	)
}

const Notifications = ({ count }) => (
	<span
		css={`
			background: ${colors.jaune};
			color: black;
			border-radius: 1rem;
			right: -0.2rem;
			top: -0.8rem;
			font-size: 60%;
			padding: 0.2rem 0.6rem;
			position: relative;
		`}
	>
		{count}
	</span>
)

const MenuIcon = () => (
	<svg viewBox="0 0 100 80" width="40" height="40">
		<rect width="100" height="20"></rect>
		<rect y="30" width="100" height="20"></rect>
		<rect y="60" width="100" height="20"></rect>
	</svg>
)

const CloseMenuIcon = () => (
	<svg
		enable-background="new 0 0 386.667 386.667"
		height="512"
		viewBox="0 0 386.667 386.667"
		width="512"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z" />
	</svg>
)
