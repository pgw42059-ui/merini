export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      daily_warning: {
        Row: {
          day: string
          id: string
          updated_at: string
          warning_text: string
        }
        Insert: {
          day: string
          id?: string
          updated_at?: string
          warning_text: string
        }
        Update: {
          day?: string
          id?: string
          updated_at?: string
          warning_text?: string
        }
        Relationships: []
      }
      economic_events: {
        Row: {
          actual_value: string | null
          category: string | null
          country: string | null
          created_at: string
          currency: string
          day: string
          event_name: string
          forecast: string | null
          id: string
          impact: string
          is_caution_window: boolean | null
          previous_value: string | null
          time_utc: string | null
          updated_at: string
        }
        Insert: {
          actual_value?: string | null
          category?: string | null
          country?: string | null
          created_at?: string
          currency: string
          day: string
          event_name: string
          forecast?: string | null
          id?: string
          impact: string
          is_caution_window?: boolean | null
          previous_value?: string | null
          time_utc?: string | null
          updated_at?: string
        }
        Update: {
          actual_value?: string | null
          category?: string | null
          country?: string | null
          created_at?: string
          currency?: string
          day?: string
          event_name?: string
          forecast?: string | null
          id?: string
          impact?: string
          is_caution_window?: boolean | null
          previous_value?: string | null
          time_utc?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      execution_reference: {
        Row: {
          atr_14: number | null
          created_at: string
          day: string
          id: string
          note: string | null
          range_pct: number | null
          suggested_sl_max: number | null
          suggested_sl_min: number | null
          symbol: string
          trailing_max: number | null
          trailing_min: number | null
          updated_at: string
          volatility_state: string | null
        }
        Insert: {
          atr_14?: number | null
          created_at?: string
          day: string
          id?: string
          note?: string | null
          range_pct?: number | null
          suggested_sl_max?: number | null
          suggested_sl_min?: number | null
          symbol: string
          trailing_max?: number | null
          trailing_min?: number | null
          updated_at?: string
          volatility_state?: string | null
        }
        Update: {
          atr_14?: number | null
          created_at?: string
          day?: string
          id?: string
          note?: string | null
          range_pct?: number | null
          suggested_sl_max?: number | null
          suggested_sl_min?: number | null
          symbol?: string
          trailing_max?: number | null
          trailing_min?: number | null
          updated_at?: string
          volatility_state?: string | null
        }
        Relationships: []
      }
      fear_greed_index: {
        Row: {
          change_value: number | null
          classification: string
          created_at: string
          day: string
          id: string
          previous_value: number | null
          source: string | null
          updated_at: string
          value: number
        }
        Insert: {
          change_value?: number | null
          classification: string
          created_at?: string
          day: string
          id?: string
          previous_value?: number | null
          source?: string | null
          updated_at?: string
          value: number
        }
        Update: {
          change_value?: number | null
          classification?: string
          created_at?: string
          day?: string
          id?: string
          previous_value?: number | null
          source?: string | null
          updated_at?: string
          value?: number
        }
        Relationships: []
      }
      key_levels: {
        Row: {
          confidence: string | null
          created_at: string
          current_price: number | null
          day: string
          id: string
          method: string
          pivot: number | null
          prior_close: number | null
          prior_high: number | null
          prior_low: number | null
          r1: number | null
          r2: number | null
          s1: number | null
          s2: number | null
          session: string | null
          symbol: string
          updated_at: string
        }
        Insert: {
          confidence?: string | null
          created_at?: string
          current_price?: number | null
          day: string
          id?: string
          method?: string
          pivot?: number | null
          prior_close?: number | null
          prior_high?: number | null
          prior_low?: number | null
          r1?: number | null
          r2?: number | null
          s1?: number | null
          s2?: number | null
          session?: string | null
          symbol: string
          updated_at?: string
        }
        Update: {
          confidence?: string | null
          created_at?: string
          current_price?: number | null
          day?: string
          id?: string
          method?: string
          pivot?: number | null
          prior_close?: number | null
          prior_high?: number | null
          prior_low?: number | null
          r1?: number | null
          r2?: number | null
          s1?: number | null
          s2?: number | null
          session?: string | null
          symbol?: string
          updated_at?: string
        }
        Relationships: []
      }
      market_daily: {
        Row: {
          comment: string
          day: string
          difficulty: string
          id: string
          symbol: string
          trend_state: string
          updated_at: string
          vol_state: string
        }
        Insert: {
          comment: string
          day: string
          difficulty: string
          id?: string
          symbol: string
          trend_state: string
          updated_at?: string
          vol_state: string
        }
        Update: {
          comment?: string
          day?: string
          difficulty?: string
          id?: string
          symbol?: string
          trend_state?: string
          updated_at?: string
          vol_state?: string
        }
        Relationships: []
      }
      market_daily_bias: {
        Row: {
          bias_label: string
          created_at: string
          day: string
          id: string
          reasons: string[]
          symbol: string
          updated_at: string
        }
        Insert: {
          bias_label: string
          created_at?: string
          day: string
          id?: string
          reasons?: string[]
          symbol: string
          updated_at?: string
        }
        Update: {
          bias_label?: string
          created_at?: string
          day?: string
          id?: string
          reasons?: string[]
          symbol?: string
          updated_at?: string
        }
        Relationships: []
      }
      market_regime_history: {
        Row: {
          bias: string | null
          created_at: string
          day: string
          id: string
          note: string | null
          regime: string
          updated_at: string
          volatility: string | null
        }
        Insert: {
          bias?: string | null
          created_at?: string
          day: string
          id?: string
          note?: string | null
          regime: string
          updated_at?: string
          volatility?: string | null
        }
        Update: {
          bias?: string | null
          created_at?: string
          day?: string
          id?: string
          note?: string | null
          regime?: string
          updated_at?: string
          volatility?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
