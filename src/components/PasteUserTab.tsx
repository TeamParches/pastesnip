import CalendarIcon from "../../public/calendar-icon.svg"

export default function PasteUserTab({
  pasteTitle,
  username,
  createdAt
}: {
  pasteTitle: string
  username: string
  createdAt: string
}) {
  return (
    <header className="flex gap-3">
      <div className="w-10 h-10 bg-green-3"></div>
      <div className="flex flex-col gap-1">
        <h1 className="leading-3 font-bold text-gray-1">{pasteTitle}</h1>
        <div className="flex gap-5">
          <p className="">{username}</p>
          <div className="flex gap-1">
            <CalendarIcon className="w-4 fill-gray-1" />
            <p>{createdAt}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
