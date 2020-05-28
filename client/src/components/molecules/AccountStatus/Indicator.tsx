import React from 'react';
import cx from 'classnames';
import { User, Market } from '../../../context';
import styles from './Indicator.module.scss';

const Indicator = ({
	className,
	togglePopover,
	forwardedRef
}: {
	className?: string;
	togglePopover: () => void;
	forwardedRef: (ref: HTMLElement | null) => void;
}) => (
	<div
		className={cx(styles.status, className)}
		onMouseOver={togglePopover}
		onMouseOut={togglePopover}
		ref={forwardedRef}
	>
		<User.Consumer>
			{(user) => (
				<Market.Consumer>
					{(market) =>
						!user.isLogged || !market.networkMatch ? (
							<div className="status-inline">
								<span className={styles.statusIndicatorCloseEnough} />
								<span>Offline</span>
							</div>
						) : user.isLogged ? (
							<div className="status-inline">
								<span className={styles.statusIndicatorActive} />
								<span>Online</span>
							</div>
						) : null}
				</Market.Consumer>
			)}
		</User.Consumer>
	</div>
);

export default Indicator;
