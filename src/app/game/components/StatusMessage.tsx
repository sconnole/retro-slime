'use client';

type Props = {
  message: string;
};

export default function StatusMessage({ message }: Props) {
  if (!message) return null;

  return <div className="mt-2 text-center text-sm text-yellow-300">{message}</div>;
}
