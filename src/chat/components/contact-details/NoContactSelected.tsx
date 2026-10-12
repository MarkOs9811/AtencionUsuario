

export const NoContactSelected = () => {
    return (
        <div className="flex h-full min-h-70 items-center justify-center bg-slate-50 px-6">
            <div className="flex max-w-md flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600">
                    💬
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-800">
                    No hay contacto seleccionado
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                    Seleccione un contacto para ver su información, historial y mensajes en esta conversación.
                </p>
            </div>
        </div>
    )
}
