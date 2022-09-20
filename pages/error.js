import Link from 'next/link'

export default function ErrorPage() {
    return (
        <div className="container">
            <div>Ошибка при заполнения анкеты</div>
            <Link href='/'>
                <a className='back'>Вернуться на главную</a>
            </Link>
        </div>
    )
}