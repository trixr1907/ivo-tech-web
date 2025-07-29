'use client';

import { useState } from 'react';

export default function TestError() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    // This will cause an error
    throw new Error('Test error!');
  }

  return (
    <div className="p-4">
      <button
        onClick={() => setShouldError(true)}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
      >
        Fehler auslösen
      </button>
    </div>
  );
}
