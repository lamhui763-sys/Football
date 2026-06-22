export interface MatchInfo {
  homeTeam: string;
  awayTeam: string;
  queryTitle: string;
}

export interface Agent1 {
  analysis: string;
  keyMetrics: string[];
}

export interface ModelPrediction {
  modelName: string;
  predictedScore: string;
  confidence: number;
  explanation: string;
}

export interface Agent2 {
  scorePrediction: string;
  probabilities: {
    homeWin: number;
    draw: number;
    awayWin: number;
  };
  confidence: number;
  rationale: string;
  modelPredictions?: ModelPrediction[];
}

export interface MarketSentimentNode {
  timeStep: string;
  sentimentScore: number;
  oddsHome: number;
  oddsAway: number;
  predictionConfidence: number;
}

export interface Agent3 {
  critique: string;
  keyRisks: string[];
  marketAnalysisText?: string;
  marketSentimentTrend?: MarketSentimentNode[];
}

export interface TacticalAnalysis {
  formationMatchup: string;
  pressingEffectiveness: string;
  setPieceThreat: string;
  analystVerdict: string;
}

export interface RebuttalAndIntegration {
  agent1Response: string;
  agent2Response: string;
  modifiedScorePrediction: string;
  modifiedConfidence: number;
}

export interface FinalSynthesis {
  recommendation: string;
  summary: string;
  riskRating: "低" | "中" | "高" | string;
  suggestedOption: string;
}

export interface MatchResult {
  opponent: string;
  score: string;
  result: string; // "W" | "D" | "L"
  venue: string; // "Home" | "Away"
  date: string;
}

export interface PerformanceTrend {
  metric: string;
  teamAValue: string;
  teamBValue: string;
  status: "advantage_a" | "advantage_b" | "even" | string;
}

export interface HistoricalPerformance {
  teamAData: {
    teamName: string;
    recentResults: MatchResult[];
    trends: PerformanceTrend[];
  };
  teamBData: {
    teamName: string;
    recentResults: MatchResult[];
    trends: PerformanceTrend[];
  };
  h2hRecord: {
    winsA: number;
    winsB: number;
    draws: number;
    recentMatches: {
      date: string;
      score: string;
      winner: string;
    }[];
  };
}

export interface PredictionData {
  matchInfo: MatchInfo;
  agent1: Agent1;
  agent2: Agent2;
  agent3: Agent3;
  tacticalAnalysis: TacticalAnalysis;
  rebuttalAndIntegration: RebuttalAndIntegration;
  finalSynthesis: FinalSynthesis;
  historicalPerformance?: HistoricalPerformance;
  groundingSources?: { title: string; url: string }[];
}

export interface HistoryItem {
  id: string;
  timestamp: string;
  title: string;
  data: PredictionData;
}

export interface RecentMatch {
  opponent: string;
  venue: "Home" | "Away" | string;
  score: string;
  result: "W" | "D" | "L" | string;
  date: string;
}

export interface TeamStats {
  avgGoalsScored: number;
  avgGoalsConceded: number;
  cleanSheets: string;
  winRate: string;
}

export interface TeamHistory {
  id: string;
  name: string;
  recentMatches: RecentMatch[];
  stats: TeamStats;
  color?: string;
}

export interface H2HMatch {
  date: string;
  home: string;
  away: string;
  score: string;
  winner: string;
}

export interface H2HHistory {
  homeTeamId: string;
  awayTeamId: string;
  played: number;
  homeWins: number;
  draws: number;
  awayWins: number;
  matches: H2HMatch[];
}
