const { colors } = require('./colors');
const theme = { colors };
export const activities = [
	{
		color: '#01BE83',
		number: '18,989',
		percentage: '+8.4%',
		text: 'Average Rating',
	},
	{
		color: '#315AFE',
		number: '20,124',
		percentage: '-2.4%',
		text: 'Total Rating',
	},
	{
		color: '#DA5853',
		number: '34,123',
		percentage: '+6.4%',
		text: 'New Reviews',
	},
	{
		color: '#FFC726',
		number: '43,234',
		percentage: '-4.4%',
		text: 'Totall Reviews',
	},
];

export const comments = [
	{
		stars: 5,
		name1: 'Julia',
		name2: 'Piotr',
		text: '"She is really creative designer"',
		color: '#01BE83',
	},
	{
		stars: 3,
		name1: 'Paweł',
		name2: 'Karol',
		text: '"He is the best"',
		color: '#FF7833',
	},
	{
		stars: 1,
		name1: 'Kuba',
		name2: 'Maciej',
		text: '"Love him"',
		color: '#315AFE',
	},
];

export const users = [
	{
		fullName: 'Adam John',
		type: 'Client',
		email: 'adamj@gmail.com',
		color: '#01BE83',
	},
	{
		fullName: 'Smith Adam',
		type: 'Designer',
		email: 'smith@gmail.com',
		color: '#315AFE',
	},
	{
		fullName: 'Ronda',
		type: 'Client',
		email: 'ronda@gmail.com',
		color: '#23212C',
	},
];

export const data = [
	{ name: 'Sat', uv: 2.3, pv: 4.3 },
	{ name: 'Sun', uv: 2.9, pv: 4.8 },
	{ name: 'Mon', uv: 3.1, pv: 1.2 },
	{ name: 'Tue', uv: 4.2, pv: 3.9 },
	{ name: 'Wed', uv: 5.3, pv: 3.2 },
	{ name: 'Thu', uv: 3.3, pv: 4.4 },
	{ name: 'Fri', uv: 4.3, pv: 2.9 },
];

export const SessionData = [
	{ name: 'Green', value: 75 },
	{ name: 'Yellow', value: 20 },
	{ name: 'Orange', value: 70 },
	{ name: 'Grey', value: 20 },
];

export const MapData = [
	{ country: 'us', value: theme.colors.green },
	{ country: 've', value: theme.colors.green },
	{ country: 'co', value: theme.colors.green },
	{ country: 'mx', value: theme.colors.green },
	{ country: 'pe', value: theme.colors.green },
	{ country: 'bo', value: theme.colors.green },
	{ country: 'in', value: theme.colors.yellow },
	{ country: 'sd', value: theme.colors.yellow },
	{ country: 'au', value: theme.colors.yellow },
	{ country: 'cn', value: theme.colors.yellow },
	{ country: 'ws', value: theme.colors.orange },
	{ country: 'mr', value: theme.colors.orange },
	{ country: 'sn', value: theme.colors.orange },
	{ country: 'ml', value: theme.colors.orange },
	{ country: 'dz', value: theme.colors.orange },
];
