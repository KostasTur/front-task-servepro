import './table.css';
const Table = ({ id, columns, data }) => {
	return (
		<table className='data-table'>
			<thead className='data-table__head'>
				<tr className='data-table__row'>
					{columns.map(({ path, name }) => (
						<th className='data-table__header' key={path}>
							{name}
						</th>
					))}
				</tr>
			</thead>
			<tbody className='data-table__body'>
				{data.map((rowData) => (
					<tr className='data-table__row' key={rowData[id]}>
						{columns.map(({ path }) => (
							<td className='data-table__cell' key={path}>
								{rowData[path]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
