import { Pipe, PipeTransform } from '@angular/core';
import { LangType, LangValue } from '../enumeration/lang.enum';

@Pipe({
    name: 'langCode',
})
export class LanguagePipe implements PipeTransform {
    public transform(value: any, args?: any): any {
        if (!value) {
            value = LangType.EN;
        }
        switch (args) {
            case "MovieDemo":
                value = value === LangType.EN ? LangValue.MovieDemo.en : LangValue.MovieDemo.pl
                break;
            case "PopularMovies":
                value = value === LangType.EN ? LangValue.PopularMovies.en : LangValue.PopularMovies.pl
                break;
            case "Sortby":
                value = value === LangType.EN ? LangValue.Sortby.en : LangValue.Sortby.pl
                break;
            case "Title":
                value = value === LangType.EN ? LangValue.Title.en : LangValue.Title.pl
                break;
            case "Popularity":
                value = value === LangType.EN ? LangValue.Popularity.en : LangValue.Popularity.pl
                break;
            case "VoteCount":
                value = value === LangType.EN ? LangValue.VoteCount.en : LangValue.VoteCount.pl
                break;
            case "Search":
                value = value === LangType.EN ? LangValue.Search.en : LangValue.Search.pl
                break;
            case "Home":
                value = value === LangType.EN ? LangValue.Home.en : LangValue.Home.pl
                break;
            case "SearchResultsFor":
                value = value === LangType.EN ? LangValue.SearchResultsFor.en : LangValue.SearchResultsFor.pl
                break;
            case "Previous":
                value = value === LangType.EN ? LangValue.Previous.en : LangValue.Previous.pl
                break;
            case "Next":
                value = value === LangType.EN ? LangValue.Next.en : LangValue.Next.pl
                break;
            case "Overview":
                value = value === LangType.EN ? LangValue.Overview.en : LangValue.Overview.pl
                break;
            case "AdditionalInfo":
                value = value === LangType.EN ? LangValue.AdditionalInfo.en : LangValue.AdditionalInfo.pl
                break;
            case "VoteAverage":
                value = value === LangType.EN ? LangValue.VoteAverage.en : LangValue.VoteAverage.pl
                break;
            case "ReleaseDate":
                value = value === LangType.EN ? LangValue.ReleaseDate.en : LangValue.ReleaseDate.pl
                break;
            case "Back":
                value = value === LangType.EN ? LangValue.Back.en : LangValue.Back.pl
                break;
            default:
                break;
        }
        return value;
    }
}
