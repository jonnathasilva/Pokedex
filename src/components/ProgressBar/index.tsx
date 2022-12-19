interface Porps {
  name: string | number | undefined
  base_stat: number | undefined
  mx: number
}

export const ProgressBar: React.FC<Porps> = ({ name, base_stat, mx }) => (
  <div className="flex items-center space-x-2">
    <p className="capitalize text-sm text-white">{name}</p>

    <span className="text-sm text-white">{base_stat}/250</span>

    <progress className="flex-1 text-black rounded-full" value={base_stat} max={mx} />
  </div>
)
