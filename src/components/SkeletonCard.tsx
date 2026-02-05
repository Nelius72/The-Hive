'use client'

import React from 'react'

interface SkeletonCardProps {
  width?: string | number
  height?: string | number
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({
  width = 'full',
  height = '48',
}) => {
  return (
    <div
  className="bg-gray-300 animate-pulse rounded-lg"
  style={{ width: width === 'full' ? '100%' : width, height: `${height}px` }}
/>

  )
}

export default SkeletonCard
