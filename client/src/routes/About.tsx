import React, { useContext } from 'react';
import { Market, User } from '../context';
import Route from '../components/templates/Route';
import Content from '../components/atoms/Content';
import VersionNumbers from '../components/molecules/VersionNumbers';
import Web3message from '../components/organisms/Web3message';
import stylesVersionNumbers from '../components/molecules/VersionNumbers/index.module.scss';
import withTracker from '../hoc/withTracker';

const About = () => {
	const market = useContext(Market);
	const user = useContext(User);

	return (
		<Route title="About" description={`A marketplace for covid19 related data on the the Ocean ${market.network} Network.`}>
			<Content>
				<p>
				A marketplace on top of ocean protocol where people can sell/share sensitive data related to covid19, distributed by &nbsp;
					<a href="https://oceanprotocol.com/" target="_blank">
						Ocean Protocol
					</a>.
				</p>
			</Content>

			<Content>
				<h2 className={stylesVersionNumbers.versionsTitle}>Your Web3 Account Status</h2>
				<Web3message extended />
			</Content>
		</Route>
	);
};

export default withTracker(About);
