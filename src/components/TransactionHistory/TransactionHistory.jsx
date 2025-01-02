import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({transactions}) {
    return (
        <table className={css.transContainer}>
    <thead>
        <tr className={css.transHead}>
            <th className={css.transContent }>Type</th>
            <th className={css.transContent}>Amount</th>
            <th className={css.transContent}>Currency</th>
        </tr>
    </thead>
    <tbody>
    {transactions.map((trans) => {
        return (
            <tr key={trans.id} className={css.transItem}>
                <td className={css.transContent}>{trans.type}</td>
                <td className={css.transContent}>{trans.amount}</td>
                <td className={css.transContent}> {trans.currency}</td>
            </tr>)
})}
    </tbody> 
</table>

    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};