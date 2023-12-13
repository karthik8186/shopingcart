

function Pages({ total, records, update,next,prev}) {
    let n = Math.ceil(total / records)
    let page = []
    for (let i = 1; i <= n; i++) {
        page.push(i)

    }
    return (
        <div>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" onClick={prev}>Previous</a>
                </li>
                {page.map((item) => (
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={() => { update(item) }}>{item}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a href="#" className="page-link" onClick={next}>next</a>
                </li>
            </ul>
        </div>
    )
}
export default Pages;