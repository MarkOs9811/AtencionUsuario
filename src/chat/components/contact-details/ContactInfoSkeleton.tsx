const ContactInfoSkeleton = () => (
    <div className="animate-pulse p-4" aria-hidden="true">
        <div className="flex flex-col items-center border-b pb-6">
            <div className="mb-3 h-20 w-20 rounded-full bg-slate-200/80 dark:bg-slate-700/80" />
            <div className="mb-2 h-5 w-32 rounded bg-slate-200/80 dark:bg-slate-700/80" />
            <div className="mb-2 h-4 w-24 rounded bg-slate-200/80 dark:bg-slate-700/80" />
            <div className="h-3 w-16 rounded bg-slate-200/80 dark:bg-slate-700/80" />
        </div>

        <div className="space-y-6 py-4">
            {[0, 1].map((section) => (
                <div key={section}>
                    <div className="mb-3 h-4 w-36 rounded bg-slate-200/80 dark:bg-slate-700/80" />
                    <div className="space-y-3">
                        {[0, 1, 2].map((row) => (
                            <div key={row} className="flex justify-between gap-4">
                                <div className="h-4 w-20 rounded bg-slate-200/80 dark:bg-slate-700/80" />
                                <div className="h-4 w-28 rounded bg-slate-200/80 dark:bg-slate-700/80" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        <div className="border-t pt-4">
            <div className="h-9 w-full rounded bg-slate-200/80 dark:bg-slate-700/80" />
        </div>
    </div>
)

export { ContactInfoSkeleton }
