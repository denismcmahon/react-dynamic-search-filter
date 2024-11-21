import React from 'react';

interface ChildProps {
  message: string;
}

export default function Child({ message }: ChildProps) {
  return (
    <div className="alert alert-info mt-3">
      <h3>Child Component</h3>
      <p>{message}</p>
    </div>
  );
}