import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { NativeBaseProvider } from 'native-base'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <NativeBaseProvider>
        <Dripsy>{children}</Dripsy>
      </NativeBaseProvider>
    </NavigationProvider>
  )
}
