import { showChannels } from '../config';

const menu = [
	{
		title: 'Publish',
		link: '/publish'
	},
    {	
		title: 'Your Uploads',
		link: '/uploads'
	},
	// {
	//     title: 'Faucet',
	//     link: '/faucet'
	// },
	{
		title: 'About',
		link: '/about'
	}
];

showChannels &&
	menu.unshift({
		title: 'Channels',
		link: '/channels'
	});

export default menu;
