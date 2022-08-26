import type { NextPage } from 'next'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'

const GuidelinePage: NextPage = () => {
  return (
    <Layout>
      <Flex padding={2} justifyContent='center' backgroundColor='white'>
        <Flex
          width={{ base: '100%', md: '1600px' }}
          justifyContent='space-between'
          alignItems='center'
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box width='100%' paddingLeft={2}>
            <h3>麻酔科学会</h3>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://anesth.or.jp/files/pdf/guideline_akuseikounetsu.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              悪性高熱症
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://anesth.or.jp/files/pdf/guideline_checkout20191118.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              麻酔器の始業点検
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://anesth.or.jp/files/pdf/20150526guideline.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              安全な手術のためのガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://anesth.or.jp/files/pdf/20150427-2guidelin.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              気道管理ガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://anesth.or.jp/files/pdf/guideline_MukokyuTest.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              無呼吸テスト実施指針
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://anesth.or.jp/files/pdf/kinen-practical-guide_20210928.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              周術期禁煙ガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://anesth.or.jp/users/person/guide_line/medicine'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              医薬品ガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://anesth.or.jp/files/pdf/kyoiku4_20220627.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              教育ガイドライン
            </Text>
            <h3>区域麻酔学会</h3>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://anesth.or.jp/files/pdf/guideline_kouketsusen.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              抗血栓療法中の区域麻酔・神経ブロックガイドライン
            </Text>
          </Box>
          <Box width='100%' paddingLeft={2}>
            <h3>集中治療学会</h3>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.jsicm.org/pdf/jjsicm28Suppl.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              日本版敗血症診療ガイドライン2020（J-SSCG2020）
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://jintensivecare.biomedcentral.com/articles/10.1186/s40560-022-00615-6'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              ARDS診療ガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.jsicm.org/pdf/aki2016.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              AKI診療ガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.jsicm.org/pdf/soki_riha_1707.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              早期リハビリテーション
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.jstage.jst.go.jp/article/jsicm/24/5/24_24_569/_pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              日本版重症患者の栄養療法ガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.jsicm.org/pdf/1guidelines1410.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              救急・集中治療における終末期医療に関するガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.jsicm.org/pdf/2015-J-PAD-guideline.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              J-PADガイドライン
            </Text>
            <h3>厚生労働省</h3>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.mhlw.go.jp/content/000967699.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              新型コロナウイルス感染症COVID-19 診療の手引き
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.mhlw.go.jp/content/10808000/000730541.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              医療情報システムの安全管理に関するガイドライン
            </Text>
            <h3>日本医真菌学会</h3>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='http://www.jsmm.org/pulic_comment2-1.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              侵襲性カンジダ症の診断・治療ガイドライン
            </Text>
          </Box>
          <Box width='100%' paddingLeft={2}>
            <h3>循環器学会</h3>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.j-circ.or.jp/cms/wp-content/uploads/2020/01/JCS2020_Ono.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              不整脈薬物治療ガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.j-circ.or.jp/cms/wp-content/uploads/2021/03/JCS2021_Tsutsui.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              急性・慢性心不全診療
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.j-circ.or.jp/cms/wp-content/uploads/2018/08/JCS2018_tsutsui_kitaoka.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              心筋症診療ガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.j-circ.or.jp/cms/wp-content/uploads/2021/03/JCS2021_Anzai.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              循環器疾患における緩和ケア
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.j-circ.or.jp/cms/wp-content/uploads/2020/04/JCS2020_Izumi_Eishi.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              弁膜症治療のガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.j-circ.or.jp/cms/wp-content/uploads/2017/07/JCS2017_nakatani_h.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              感染性心内膜炎
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.j-circ.or.jp/cms/wp-content/uploads/2017/10/JCS2017_fukuda_h.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              肺高血圧症治療ガイドライン
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.j-circ.or.jp/cms/wp-content/uploads/2017/09/JCS2017_ito_h.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              肺血栓塞栓症および深部静脈血栓症
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.j-circ.or.jp/cms/wp-content/uploads/2020/04/JCS2020_Kimura_Nakamura.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              冠動脈疾患患者における抗血栓療法
            </Text>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.j-circ.or.jp/cms/wp-content/uploads/2022/03/JCS2022_Azuma.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              末梢動脈疾患ガイドライン
            </Text>
            <h3>感染症学会</h3>
            <Text
              as='a'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              href='https://www.kansensho.or.jp/uploads/files/guidelines/guideline_jaid_jsc.pdf'
              variant='mediumLarge'
              display={{ base: 'none', md: 'block' }}
              paddingLeft={2}
              paddingBottom={1}
              fontSize={'15px'}
            >
              JAID/JSC 感染症治療ガイドライン
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default GuidelinePage
