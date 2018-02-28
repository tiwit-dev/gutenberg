/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { getBlockType } from '@wordpress/blocks';

const TableOfContentsItem = ( {
	children,
	isValid,
	level,
	onClick,
	path = [],
} ) => (
	<li
		className={ classnames(
			'document-outline__item',
			`is-${ level.toLowerCase() }`,
			{
				'is-invalid': ! isValid,
			}
		) }
	>
		<button
			className="document-outline__button"
			onClick={ onClick }
		>
			<span className="document-outline__emdash" aria-hidden="true"></span>
			{ path.map( ( { name }, index ) =>	(
				<strong key={ index } className="document-outline__level">
					{ getBlockType( name ).title }
				</strong>
			) ) }
			<strong className="document-outline__level">
				{ level }
			</strong>
			<span className="document-outline__item-content">
				{ children }
			</span>
			<span className="screen-reader-text">{ __( '(Click to focus this heading)' ) }</span>
		</button>
	</li>
);

export default TableOfContentsItem;
