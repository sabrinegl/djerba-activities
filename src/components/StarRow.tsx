interface Props { n?: number; }

export default function StarRow({ n = 5 }: Props) {
  return (
    <div style={{ color: '#F5C842', fontSize: 13, letterSpacing: 2 }}>
      {'★'.repeat(n)}
    </div>
  );
}