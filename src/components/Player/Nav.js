import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { CgMusicNote } from "react-icons/cg";
import { GrAddCircle } from "react-icons/gr";
import { VscRocket, VscThumbsup, VscFileSubmodule } from "react-icons/vsc";
import logo from "../../../assets/img/Artist/logo-footer.png";
import playerStyles from "../Style/Player/PlayerStyles";

const NavHomeScreen = () => {
	const { user } = useAuth();
	const playlists = user?.profile?.musiclists ?? [];

	const musicLists = playlists.filter(
		(musiclist) => musiclist.type_list === "playlist"
	);

	return (
		<nav>
			<Link href='/player'>
				<img src={logo} className='logo' alt='Lara logo' />
			</Link>
			<div className='container'>
				<ul className='list'>
					<li className='item'>
						<Link href='/player'>
							<a>
								<div>
									<CgMusicNote />
								</div>
								<strong>Home</strong>
							</a>
						</Link>
					</li>
					<li className='item'>
						<Link href='/player'>
							<a>
								<div>
									<VscRocket />
								</div>
								<strong>Discover</strong>
							</a>
						</Link>
					</li>

					{/* <li className='item'>
						<Link href='/artist'>
							<a>
								<div>
									<VscAccount />
								</div>
								<strong>Artists</strong>
							</a>
						</Link>
					</li> */}

					<li className='item'>
						<Link href='/favorites'>
							<a>
								<div>
									<VscThumbsup />
								</div>
								<strong>My Favorites</strong>
							</a>
						</Link>
					</li>

					<li className='item'>
						<Link href='/favorites'>
							<a>
								<div>
									<GrAddCircle />
								</div>
								<strong>Create a Playlist</strong>
							</a>
						</Link>
					</li>
				</ul>
				<h2>My Play Lists</h2>
				<ul className='list'>
					{user &&
						musicLists.map((list) => (
							<li className='item personal-list' key={list.id}>
								<Link
									href={`/playlist/[title]?title=${list.title}`}
									as={`/playlist/${list.title}`}
									key={list.id}
								>
									<a>
										<VscFileSubmodule />
										<strong>{list.title}</strong>
									</a>
								</Link>
							</li>
						))}
				</ul>
			</div>
			<style jsx playerStyles>
				{playerStyles}
			</style>
		</nav>
	);
};

export default NavHomeScreen;
