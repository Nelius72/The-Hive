'use client'

import React from 'react'

interface SkeletonCardProps {
  width?: string | number
  height?: number | string
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({
  width = '100%',
 
}) => {
  return (
    <div
      className="bg-gray-300 animate-pulse rounded-lg max-w-full h-auto aspect-2/3"
      style={{ width }}
    />
  )
}

export default SkeletonCard
