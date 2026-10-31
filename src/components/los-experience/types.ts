export interface IntegrationSpec {
  id: string
  name: string
  provider: string
  category: 'intake' | 'kyc_kyb' | 'credit' | 'collateral' | 'geocoding' | 'core'
  logo: string
  accentColor: string
  capabilities: string[]
  role: string
  spec: string
}

