import org.junit.*;
import static org.junit.Assert.*;
public class SquadTest {

    @Test
    public void squad_instantiatesCorrectly_true() {
        Squad testSquad = new Squad("Suicide", 5, "Short temper");
        assertTrue(true);
    }

    @Test
    public void getName_squadInstantiatesWithName_String() {
        Squad testSquad = new Squad("Suicide", 5, "Short temper");
        assertEquals("Suicide", testSquad.getName());
    }

    @Test
    public void getSize_squadInstantiatesWithSize_int() {
        Squad testSquad = new Squad("Suicide", 5, "Short temper");
        assertEquals(5, testSquad.getSize());
    }

    @Test
    public void getCause_squadInstantiatesWithCause_String() {
        Squad testSquad = new Squad("Suicide", 5, "Short temper");
        assertEquals("Suicide", testSquad.getCause());
    }

    @Test
    public void all_returnsAllInstancesOfSquad_true() {
        Squad firstSquad = new Squad("Suicide", 5, "Short temper");
        Squad secondSquad = new Squad("Shooters", 4, "Gun squad");
        assertTrue(Squad.all().contains(firstSquad));
        assertTrue(Squad.all().contains(secondSquad));
    }

    @Test
    public void clear_emptiesAllSquadsFromList_0() {
        new Squad("Suicide", 5, "Short temper");
        Squad.clear();
        assertEquals(Squad.all().size(), 0);
    }

    @Test
    public void getId_squadsInstantiatesWithAnId_1() {
        Squad.clear();
        Squad testSquad = new Squad("Suicide", 5, "Short temper");
        assertEquals(1, testSquad.getId());
    }

    @Test
    public void find_returnsSquadWithSameId_secondSquad() {
        Squad.clear();
        new Squad("Suicide", 5, "Short temper");
        Squad secondSquad = new Squad("Genius", 4, "Java BDD ");
        assertEquals(Squad.find(secondSquad.getId()), secondSquad);
    }

    @Test
    public void getHeroes_initiallyReturnsEmptyList_ArrayList() {
        Squad.clear();
        Squad testSquad = new Squad("Suicide", 5, "Short temper");
        assertEquals(0, testSquad.getHeroes().size());
    }

    @Test
    public void addHero_addsHeroToList_true() {
        Squad testSquad = new Squad("Suicide", 5, "Short temper");
        Hero testHero = new Hero("poison", 50, "intelligent", "Power failure");
        testSquad.addHero(testHero);
        assertTrue(testSquad.getHeroes().contains(testHero));
    }

    @Test
    public void heroAlreadyExists_checksIfHeroExistsinSquads_true() {
        Squad testSquad = new Squad("Suicide", 5, "Short temper");
        Hero testHero = new Hero("poison", 50, "intelligent", "power outage");
        testSquad.addHero(testHero);
        assertTrue(Squad.heroAlreadyExists(testHero));


    }
}