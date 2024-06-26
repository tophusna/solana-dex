import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import CyberpunkStyleCard from '@/components/CyberpunkStyleCard'
import Row from '@/components/Row'
import Tabs from '@/components/Tabs'
import DecimalInput from '@/components/DecimalInput'
import Button from '@/components/Button'

const AdvancedTrade = () => {
  const [mode, setMode] = useState(false)

  return (
    <PageLayout mobileBarTitle="Solana-Dex" metaTitle="Solana-Dex" className="flex items-center">
      <CyberpunkStyleCard
        wrapperClassName="w-[min(456px,100%)] self-center"
        className="py-8 pt-4 px-6 mobile:py-5 mobile:px-3"
      >
        <Row className="flex flex-col justify-center items-center  mb-5 mobile:mb-2 gap-4">
          <Tabs
            className="my-5 border-[#ff6123] border-[2px]"
            currentValue={'Limit-Order'}
            values={['Limit-Order', 'Stop-Loss']}
            onChange={(newTab) => {
              if (newTab === 'Stop-Loss') {
                setMode(true)
              }
            }}
          />
          <DecimalInput
            className={`px-3 py-2 mobile:py-1 ring-inset ring-1 ring-[rgba(255,86,86,0.94)] rounded-xl mobile:rounded-lg pc:w-[300px] mobile:w-auto`}
            placeholder={''}
            decimalCount={2}
            prefix={'Price:'}
            prefixClassName={'mobile:text-xs text-sm font-medium text-[rgba(196,214,255,.5)] mr-1'}
            inputClassName="font-medium text-sm mobile:text-xs text-[rgba(196,214,255)] placeholder-[rgba(196,214,255,0.5)]"
          />
          <DecimalInput
            className={`px-3 py-2 mobile:py-1 ring-inset ring-1 ring-[rgba(255,86,86,0.94)] rounded-xl mobile:rounded-lg pc:w-[300px] mobile:w-auto`}
            placeholder={''}
            decimalCount={2}
            prefix={'Amount:'}
            prefixClassName={'mobile:text-xs text-sm font-medium text-[rgba(196,214,255,.5)] mr-1'}
            inputClassName="font-medium text-sm mobile:text-xs text-[rgba(196,214,255)] placeholder-[rgba(196,214,255,0.5)]"
          />
          <DecimalInput
            className={`px-3 py-2 mobile:py-1 ring-inset ring-1 ring-[rgba(255,86,86,0.94)] rounded-xl mobile:rounded-lg pc:w-[300px] mobile:w-auto`}
            placeholder={''}
            decimalCount={2}
            prefix={''}
            prefixClassName={'mobile:text-xs text-sm font-medium text-[rgba(196,214,255,.5)] mr-1'}
            inputClassName="font-medium text-sm mobile:text-xs text-[rgba(196,214,255)] placeholder-[rgba(196,214,255,0.5)]"
          />
          <Button size="sm" className="bg-[#191b1d] text-[#ff6123] mt-2 py-2.5 w-[160px]">
            Submit
          </Button>
        </Row>
      </CyberpunkStyleCard>
    </PageLayout>
  )
}

export default AdvancedTrade
