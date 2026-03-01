import { useState } from 'react'
import './App.css'

function App() {
  const name = 'Sam'
  const [isHovered, setIsHovered] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [isJumping, setIsJumping] = useState(false)

  const letters = name.split('')

  return (
    <>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Welcome to Your Interactive Profile!</h1>
        
        <div 
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: isHovered ? '#ffffff' : '#4c6ef5',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            marginBottom: '30px'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            setClickCount(clickCount + 1)
            setShowMessage(true)
            setIsJumping(true)
            setTimeout(() => setIsJumping(false), 400) // reset after animation
          }}
        >
          {letters.map((letter, index) => (
            <span 
              key={index}
              style={{
                display: 'inline-block',
                marginRight: '10px',
                animation: isHovered
                  ? `bounce 0.6s ease-in-out ${index * 0.1}s infinite`
                  : isJumping
                  ? `jump 0.4s ease-in-out`
                  : 'none'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div style={{ marginBottom: '30px' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>
            Click on my name to interact with it!
          </p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#4c6ef5' }}>
            You've clicked {clickCount} times
          </p>
        </div>

        {showMessage && (
          <div style={{
            padding: '20px',
            backgroundColor: '#e7f5ff',
            borderRadius: '10px',
            marginBottom: '20px',
            animation: 'fadeIn 0.5s ease-in'
          }}>
            <p style={{ fontSize: '20px', color: '#1971c2' }}>
              👋 Hey! That's me, {name}! Nice to meet you!
            </p>
          </div>
        )}

        <button 
          onClick={() => {
            setShowMessage(!showMessage)
            setClickCount(0)
          }}
          style={{
            padding: '12px 30px',
            fontSize: '16px',
            backgroundColor: '#4c6ef5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '20px'
          }}
        >
          Reset
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  )
}

export default App
