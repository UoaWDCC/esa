export default function NavLink({label, href}: {label: string, href: string}) {
    return (
        <a href={href}>
            {label}
        </a>
    )
}