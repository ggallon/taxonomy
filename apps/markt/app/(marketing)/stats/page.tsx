import { planetScale } from "@/lib/planetscale"
import { Stat } from "@/components/stat"

export const runtime = "experimental-edge"

export const revalidate = 60

async function getStats() {
  const { rows } = await planetScale.execute(
    "SELECT (SELECT count(id) FROM User) as users, (SELECT count(id) FROM Post) as posts, (SELECT count(id) FROM User WHERE stripeSubscriptionId IS NOT NULL) as paid"
  )

  if (!rows?.length) {
    return null
  }

  const [stats] = rows

  // Row has type Record<string, any> | any[] no matter what's passed for as?.
  // This is a temporary type guard.
  // @see https://github.com/planetscale/database-js/issues/71.
  if (!Array.isArray(stats)) {
    return {
      users: stats.users,
      posts: stats.posts,
      paid: stats.paid,
    }
  }

  return null
}

export default async function StatsPage() {
  const stats = await getStats()

  return (
    <section className="container flex flex-col gap-6 py-8  md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[52rem]">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
          Edge Runtime and PlanetScale
        </h2>
        <p className="leading-normal text-slate-700 sm:text-lg sm:leading-7">
          This page is using the Edge Runtime with data fetched using
          PlanetScale Serverless driver.
        </p>
      </div>
      {stats && (
        <div className="mx-auto grid md:grid-cols-3 md:max-w-[60rem] gap-4 w-full">
          <Stat to={stats.users} text="Registered Users">
            <svg className="w-[100px] h-[50px]" viewBox="0 0 100 50">
              <path
                d="M 0,49.974220545611345 C 1,49.39782978143856 3,48.279166261974524 5,47.092266724747404 C 7,45.905367187520284 8,44.77689718027033 10,44.039722859475745 C 12,43.30254853868116 13,44.4035292286622 15,43.406395120774484 C 17,42.409261012886766 18,39.50667673800428 20,39.05405232003717 C 22,38.601427902070064 23,41.3204657996938 25,41.14327303093893 C 27,40.96608026218406 28,40.08553363545408 30,38.1680884762628 C 32,36.25064331707153 33,31.631270797123182 35,31.556047234982554 C 37,31.480823672841925 38,37.44460608445381 40,37.79197066555967 C 42,38.139335246665524 43,34.852023380673145 45,33.29287014051185 C 47,31.73371690035056 48,32.25013422451495 50,29.99620446475321 C 52,27.74227470499147 53,23.698614423588413 55,22.023221341703156 C 57,20.3478282598179 58,22.71277059447314 60,21.619239055326922 C 62,20.525707516180702 63,17.473809687078493 65,16.555563645972065 C 67,15.637317604865636 68,19.089509738453057 70,17.02800884979478 C 72,14.966507961136504 73,9.005619982434723 75,6.248059202680686 C 77,3.490498422926649 78,0.4473451192676121 80,3.2402049510245945 C 82,6.033064782781577 83,19.21628237791182 85,20.212358361465597 C 87,21.208434345019374 88,10.554114470549631 90,8.22058486879348 C 92,5.88705526703733 94,8.479885255906572 95,8.544710352684845"
                fill="none"
                stroke-width="3px"
                className="stroke-slate-900"
              />
            </svg>
          </Stat>
          <Stat to={stats.paid} text="Paid Users">
            <svg className="w-[100px] h-[50px]" viewBox="0 0 100 50">
              <path
                d="M 0,49.94765273880501 C 1,49.385097989476996 3,48.221275238783086 5,47.13487899216492 C 7,46.04848274554676 8,44.956321893609484 10,44.515671505714174 C 12,44.075021117818864 13,46.17688016754378 15,44.931627052688384 C 17,43.68637393783299 18,40.118877503844125 20,38.289405931437216 C 22,36.459934359030306 23,36.8406347605897 25,35.78426919065382 C 27,34.727903620717946 28,34.28600949541689 30,33.00757808175783 C 32,31.729146668098767 33,30.30486025149646 35,29.392112122358515 C 37,28.47936399322057 38,29.10753025329817 40,28.4438374360681 C 42,27.780144618838033 43,27.47796597839575 45,26.073648036208183 C 47,24.669330094020616 48,21.90541722307717 50,21.422247725130255 C 52,20.93907822718334 53,21.846642924967878 55,23.65780054647361 C 57,25.46895816797934 58,29.59770889528233 60,30.478035832658914 C 62,31.358362770035498 63,30.083954103126885 65,28.059435233356524 C 67,26.034916363586163 68,23.634298391316904 70,20.355441483807105 C 72,17.076584576297307 73,10.613809929890508 75,11.66515069580754 C 77,12.716491461724573 78,23.133010474791526 80,25.612145313392272 C 82,28.09128015199302 83,25.972735523268547 85,24.06082488881126 C 87,22.14891425435398 88,19.361441322345048 90,16.052592141105855 C 92,12.743742959866662 94,9.223781614313411 95,7.5165789826153"
                fill="none"
                stroke-width="3px"
                className="stroke-slate-900"
              />
            </svg>
          </Stat>
          <Stat to={stats.posts} text="Total Posts">
            <svg className="w-[100px] h-[50px]" viewBox="0 0 100 50">
              <path
                d="M 0,49.68634390054976 C 1,49.14994240565811 3,47.831186591337946 5,47.00433642609152 C 7,46.17748626084509 8,46.35993791120191 10,45.55209307431762 C 12,44.744248237433325 13,43.56397629839403 15,42.96511224167007 C 17,42.36624818494611 18,44.01252563293295 20,42.5577727906978 C 22,41.103019948462645 23,36.56863627977745 25,35.691348030494304 C 27,34.81405978121116 28,38.91405222442457 30,38.17133154428206 C 32,37.42861086413955 33,33.81838901472956 35,31.977744629781736 C 37,30.13710024483391 38,29.010220623139396 40,28.968109619542933 C 42,28.92599861594647 43,32.327547816049744 45,31.767189611799417 C 47,31.20683140754909 48,27.92632953123746 50,26.1663185982913 C 52,24.406307665345143 53,24.381120950272056 55,22.96713494706863 C 57,21.553148943865203 58,20.472775986524404 60,19.096388582274173 C 62,17.720001178023942 63,17.21985330044139 65,16.085197925817475 C 67,14.95054255119356 68,11.189441812098853 70,13.423111709154604 C 72,15.656781606210355 73,25.015222396994087 75,27.25354741109623 C 77,29.49187242519837 78,26.476600952247182 80,24.614736779665314 C 82,22.752872607083447 83,21.550198999674265 85,17.94422654818689 C 87,14.338254096699515 88,10.3366076745192 90,6.584874522228439 C 92,2.8331413699376786 94,0.6654235338321559 95,-0.8144392132669154"
                fill="none"
                stroke-width="3px"
                className="stroke-slate-900"
              />
            </svg>
          </Stat>
        </div>
      )}
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[52rem]">
        <p className="leading-normal text-slate-700 sm:leading-7">
          The numbers are pulled from the production database.{" "}
          <em>The charts are for illustrative purposes only.</em>
        </p>
      </div>
    </section>
  )
}
