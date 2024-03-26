interface Match {
    _id: string;
    details: MatchDetails;
    teams: Team[];
    toss: MatchToss;
    result: MatchResult;
    umpires?: Umpire[];
    innings: Innings[];
    players: Player[];
    status: MatchStatus; 
  }

  interface MatchDetails {
    _id: string;
    innings: number;
    overs: number;
    playersPerSide: number;
  }

  interface MatchToss {
    winner: Team;
    choice: 'bat' | 'bowl';
  }

  interface MatchStatus {
    type: 'live' | 'completed' | 'upcoming';
    date: Date; 
  }
  
  interface Team {
    _id: string; // Unique identifier
    name: string; // Full name of the team
    captainId?: string; // Optional reference to Player document
    captain?: Player; 
  }
  
  interface MatchResult {
    result: 'won' | 'lost' | 'tied';
    winner?: Team;
    by?: 'runs' | 'wickets';
    runs?: number;
    wickets?: number;
  }
  
  interface Margin {
    runs?: number; // Optional: Margin of victory in runs
    wickets?: number; // Optional: Margin of victory in wickets
  }

  interface Innings {
    _id: string; // Unique identifier
    matchId: string; // Reference to Match document
    teamId: string; // Reference to Team document
    number: number; // Innings number (1 or 2)
    runs: number; // Total runs scored
    wickets: number; // Number of wickets lost
    extras: number; // Extras conceded
    overs: number; // Overs played
    batsmen: Batsman[]; // Array of Batsman objects (optional)
    bowlers: Bowler[]; // Array of Bowler objects (optional)
  }
  
  interface Batsman {
    _id: string; // Unique identifier (can be linked to a Player document)
    inningsId: string; // Reference to Innings document
    playerId?: string; // Optional reference to Player document
    name: string; // Full name of the batsman
    runs: number; // Runs scored
    ballsFaced: number; // Balls faced
    fours: number; // Number of fours hit
    sixes: number; // Number of sixes hit
    out?: {
      type: string; // Type of dismissal (e.g., bowled, caught, LBW)
      bowlerId?: string; // Optional: Reference to Bowler document (if applicable)
    };
    strikeRate?: number; // Calculated field based on runs and balls faced
  }
  
  interface Bowler {
    _id: string; // Unique identifier (can be linked to a Player document)
    inningsId: string; // Reference to Innings document
    playerId?: string; // Optional reference to Player document
    name: string; // Full name of the bowler
    overs: number; // Overs bowled
    maidens: number; // Number of maiden overs
    runsConceded: number; // Runs conceded
    wicketsTaken: number; // Number of wickets taken
    economyRate?: number; // Calculated field based on runs conceded and overs bowled
    noBalls?: number; // Calculated field based on runs conceded and overs bowled
    wideBalls?: number; // Calculated field based on runs conceded and overs bowled
  }
  
  interface Player {
    _id: string; // Unique identifier
    name: string; // Full name of the player
    role?: string; // Optional: Role of the player (batsman, bowler, all-rounder)
    teamId?: [string]; // Optional reference to Team document (if applicable)
    matchesPlayed?: number; // Optional: Number of matches played
    runsScored?: number; // Optional: Total runs scored across all matches
    wicketsTaken?: number; // Optional: Total wickets taken across all matches
  }

  interface Umpire {
      _id: string; // Unique identifier
      name: string; //
  }

  interface Tournament {
    _id: string; // Unique identifier
    name: string; // Name of the tournament
    startDate: Date; // Start date of the tournament
    endDate: Date; // End date of the tournament
    teams: Team[]; // Array of participating teams
    matches: Match[]; // Array of Match objects played in the tournament
    winner?: Team; // Optional: Winning team if the tournament is complete
    runnerUp?: Team; // Optional: Runner-up team if applicable
  
    // Optional additional fields
    location?: string; // Location of the tournament
    organizer?: string; // Organizer of the tournament
    website?: string; // Official website of the tournament
  }