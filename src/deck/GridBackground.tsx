interface GridBackgroundProps {
  isDark?: boolean;
}

export function GridBackground({ isDark = false }: GridBackgroundProps) {
  return <div className={`grid-bg${isDark ? ' grid-bg--dark' : ''}`} aria-hidden />;
}
