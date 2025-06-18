import type { Animal } from '../models/Animal'
import { WarningBox } from './styled/AlerBox'

type AnimalHungerWarnignProps = {
    animal: Animal
}

export const AnimalHungerWarning = ({ animal }: AnimalHungerWarnignProps) => <>
    { animal.checkHunger(3) ? <WarningBox>This animal will need food in less than one hour!</WarningBox> : <></> }
</>