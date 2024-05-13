'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AllMatches() {
    const [matches, setMatches] = useState([])
    const router = useRouter()

    useEffect(() => {
        const fetchMatches = async () => {
            try {
            } catch (error) {
                console.error('Error fetching games:', error)
            }
        }
        fetchMatches()
    }, [])

    const handleMatchClick = (gameId: any) => {
        // router.push(`/scorecard/${gameId}`); // Navigate to scorecard page
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-4">My Games</h1>
            {matches.length > 0 ? (
                <ul className="list-disc space-y-4">
                    {/* {games.map((game) => (
            
          ))} */}
                </ul>
            ) : (
                <p className="text-center">No games organized yet.</p>
            )}
        </div>
    )
}
